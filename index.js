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
            break;
        case '/about':
            path += '/about.html'
            break;
        default:
            path += '/404.html'
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