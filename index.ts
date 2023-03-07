import express from "express";

const app = express();
const port = 3000;

app.get("/ping", (_request, response) => {
  console.log("someone pinged here");
  response.send("pong");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
