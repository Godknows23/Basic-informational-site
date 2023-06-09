const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    filePath = "./pages/index.html";
  } else if (url === "/about") {
    filePath = "./pages/about.html";
  } else if (url === "/contact-me") {
    filePath = "./pages/contact-me.html";
  } else {
    filePath = "./pages/404.html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    if (filePath === "./pages/404.html") {
      res.writeHead(404, { "Content-Type": "text/html" });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
    }
    res.write(data);

    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});