var http = require('http');
const hostname = '127.0.0.1';
const port = 5000;

//create web server
var server = http.createServer(function(req, res) {
    const {
        query
    } = require("url").parse(req.url, true);
    if (query.name) {

        res.write(`<html><body><center><h3>Hello ${query.name},Welcome to WeJapa Internships</h3></center></body></html>`);
        res.end();
    }
    //check the URL of the current request
    else if (req.url == '/') {

        //set response header
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        //set response content
        res.write('<html><body><center><h3>Hello World,Welcome to Wejapa Internships.</h3></center></body></html>');
        res.end();
    } else


        res.write('<html><body><center><h3>Invalid Request</h3></center></body></html>');
    res.end();

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});