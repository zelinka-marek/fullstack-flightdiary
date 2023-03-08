import express from "express";
import { getNonSensitiveEntries } from "../services/diary";

export const diaryRouter = express.Router();

diaryRouter.get("/", (_request, response) => {
  const diaries = getNonSensitiveEntries();

  response.json(diaries);
});

diaryRouter.post("/", (_request, response) => {
  response.send("Saving a diary!");
});
