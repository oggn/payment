import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello world");
});

// listen 2번째 인자로는 callback함수를 받습니다.
app.listen(port, () => console.log(`Running server in ${port} port`));
