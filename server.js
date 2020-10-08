const express = require("express");
const path = require("path");
const proxy = require("express-http-proxy");
const app = express();
const port = 3000;

app.get("/static", (req, res) => {
  const fileDirectory = path.resolve(__dirname, ".", "static/");
  setTimeout(() => {
    res.sendFile(req.query.file, { root: fileDirectory }, (err) => {
      res.end();
    });
  }, req.query.delay);
});

app.use("/random-image", proxy("https://picsum.photos/"));

// app.get("/random-image", (req, res) => {
//   req.get({ url: "https://picsum.photos/200/300", headers: req.headers });

//   setTimeout(() => {
//     res.send("Req OK");
//   }, req.query.delay);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
