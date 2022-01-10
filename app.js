//01aplikasi membaca file
const fs = require('fs');
fs.writeFileSync('Hello.txt', 'Hello There');

//02aplikasi membuat server
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('req');
});

server.listen(3000)

//03Membuat exiting from event loop
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
})
server.listen(3000);


// 01 understanding the request
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
});
server.listen(3000);

// 02 sending the response
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);

// 03 routing the request
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/secondserver") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html");
    res.write("<head><title>Server Pge second</title></head>");
    res.write("<body><h2>Welcome to the Internet</h2></body>");
    res.write("</html");
    res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server Page second</title></head>");
  res.write("<body><h2>Welcome to the Internet</h2></body>");
  res.end();
});
server.listen(3000);

// 04 redirecting request
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Terserah</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("testing.txt", "YOLO WORLD");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server Page second</title></head>");
  res.write("<body><h2>Welcome to the Internet</h2></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);

// 05 parsing the request bodies
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("testing.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server Page second</title></head>");
  res.write("<body><h2>Welcome to the Internet</h2></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);






