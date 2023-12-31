const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/api/users') {
        const users = [
            {
                'names': 'Bonheur NDAHIMANA',
                'age': 10
            },
            {
                'names': 'Amuli NTIHINYUKA',
                'age': 18
            }
        ];

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(users));
    } else {
        let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url === '/about' ? 'about.html' : req.url);

        // Extension of the file
        let extname = path.extname(filePath);
        // Initial content type
        let contentType = 'text/html';
        
        // Check extension and set Content type
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;

            case '.css':
                contentType = 'text/css';
                break;

            case '.json':
                contentType = 'application/json';
                break;

            case '.png':
                contentType = 'image/png';
                break;

            case '.jpg':
                contentType = 'image/jpg';
                break;

            default:
                break;
        }

        // Read file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // Page not found
                    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.end(content, 'utf-8');
                    });
                }
            } else {
                res.writeHead(200, {
                    'Content-Type': contentType
                });
                res.end(content, 'utf-8');
            }
        });
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Server running....'));
