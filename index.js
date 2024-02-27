const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Server is created");
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader("Content-Type", 'text/html');
    // res.write("Hello, World");
    // res.end();

    let path = './files';
    switch (req.url) {
        case '/':
            path += '/home.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '/404.html'
            res.statusCode = 404;
            break;
    };

    fs.readFile(path, (err, fileData) => {
        if(err){
            console.log("Error");
        }else{
            //res.write(fileData);
            res.end(fileData);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000');
});