var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url === '/page-c.html') {

        res.writeHead(301, { 'Location': '/page-b.html' });
        return res.end();
    } else {
        // console.log(req.url);
        // fs.readFile(__dirname, req.url.substring(1),
        //     function (err, data) {
        //         if (err) throw err;
        //         res.writeHead(200);
        //         res.write(data.toString('utf8'));
        //         return res.end();
        //     });
        fs.readFile(`./${req.url}`, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            return res.end();
        });
    }
}).listen(8085);
