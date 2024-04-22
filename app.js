const http = require('http');
const routes = require('./routes/index');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/' && method === 'GET') {
        routes.handleHome(res);
    } else if (url === '/add-car') {
        routes.handleAddCar(method, req, res);
    } else if (url === '/car' && method === 'GET') {
        routes.handleCar(res);
    } else {
        routes.handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});