import express from "express";
import { findDiaryById, getNonSensitiveEntries } from "../services/diary";

export const diaryRouter = express.Router();

diaryRouter.get("/", (_request, response) => {
  response.send(getNonSensitiveEntries());
});

diaryRouter.get("/:id", (request, response) => {
  const { id } = request.params;

  const diary = findDiaryById(Number(id));
  if (!diary) return response.sendStatus(404);

  response.send(diary);
});

diaryRouter.post("/", (_request, response) => {
  response.send("Saving a diary!");
});
