const http = require("http");

const hostName = "localhost";
const PORT = 3000;

const server = http.createServer((req,res) => {
    if (req.url === "/api/v1/hello-world" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end("Hello, World!");
    }else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end("Not Found");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});