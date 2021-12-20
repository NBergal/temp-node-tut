const { createServer } = require('http');
const server = createServer((req, res) => {
    if (req.url === '/') {
        res.end('cocksucker');
    }
    if (req.url === '/about') {
        res.end('damn u so fuckin hot');
    }
    res.end(`
        <h1>fuck ur mom!!!111!1</h1>
        <p>I HOPE U DIE U SON OF A SLUTS FAMILY</p>
        <a href="/">fuck ur mom!!!111!1</a>
    `);
});
server.listen('5000');