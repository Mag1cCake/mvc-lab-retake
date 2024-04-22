const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const homeView = require('../views/home');
const addCarView = require('../views/add-car');
const carView = require('../views/car');

function handleHome(response) {
    response.setHeader('Content-Type', 'text/html');
    response.write(homeView.renderPage());
    response.end();
}

function handleAddCar(method, request, response) {
    if (method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write(addCarView.renderPage());
        response.end();
    } else if (method === 'POST') {
        const body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            const parsedData = querystring.parse(Buffer.concat(body).toString());
            const dataPath = path.join(__dirname, '..', 'formData.json');

            fs.writeFileSync(dataPath, JSON.stringify(parsedData));

            response.statusCode = 302;
            response.setHeader('Location', '/car');
            response.end();
        });
    }
}

function handleCar(response) {
    const dataPath = path.join(__dirname, '..', 'formData.json');

    if (fs.existsSync(dataPath)) {
        const data = fs.readFileSync(dataPath);
        response.setHeader('Content-Type', 'text/html');
        response.write(carView.renderPage(data));
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('No car data found.');
        response.end();
    }
}

function handlePageNotFound(response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write('404 Page Not Found');
    response.end();
}

module.exports = {
    handleHome,
    handleAddCar,
    handleCar,
    handlePageNotFound,
};