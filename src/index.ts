import express from "express";
import { diaryRouter } from "./routes/diaries";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/ping", (_request, response) => {
  console.log("someone pinged here");
  response.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
