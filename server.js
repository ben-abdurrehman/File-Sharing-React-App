import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Busboy from "busboy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const PORT = 5173;

http
  .createServer((req, res) => {
    if (req.method === "POST" && req.url === "/upload") {
      const busboy = new Busboy({ headers: req.headers });

      busboy.on("file", (fieldname, file, filename) => {
        console.log(`Uploading: ${filename}`);
        const saveTo = path.join(uploadsDir, filename);
        file.pipe(fs.createWriteStream(saveTo));

        file.on("end", () => {
          console.log(`File [${filename}] uploaded successfully.`);
        });
      });

      busboy.on("finish", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "File uploaded successfully" }));
      });

      req.pipe(busboy);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
