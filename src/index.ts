import express from "express";
import { diaryRouter } from "./routes/diaries";

const app = express();
const port = 3000;

app.get("/ping", (_request, response) => {
  console.log("someone pinged here");
  response.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
