const http = require('http');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator.js');
const { getCars, getCarInformation, getCarAge } = require('./cars.js');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write(getHTMLDocumentStart());

    res.write('<body>');

    res.write('<p>');
    res.write(getCarInformation(3));
    res.write('</p>');

    res.write('<p>');
    res.write(getCarAge(3));
    res.write('</p>');

    res.write('</body>');

    res.write(getHTMLDocumentEnd());

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});