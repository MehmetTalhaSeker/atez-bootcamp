import * as http from "http";
import * as url from "url";
import * as fs from "fs";
import * as path from "path";

const port = 3000;

const contentTypes: { [key: string]: string } = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
};

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const pathQuery = url.parse(req.url as string, true);
    const fileName = `./pages${pathQuery.pathname}`;
    const ext = path.extname(pathQuery.pathname as string).replace(/\./g, "");

    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("Boyle bir sayfa bulunamadi.");
      }
      res.writeHead(200, { "Content-Type": contentTypes[ext] });
      return res.end(data);
    });
  }
);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
