import express from "express";
import { findDiaryById, getNonSensitiveEntries } from "../services/diary";

export const diaryRouter = express.Router();

diaryRouter.get("/", (_request, response) => {
  response.send(getNonSensitiveEntries());
});

diaryRouter.get("/:id", (request, response) => {
  const { id } = request.params;

  const entry = findDiaryById(Number(id));
  if (!entry) return response.sendStatus(404);

  response.send(entry);
});

diaryRouter.post("/", (_request, response) => {
  response.send("Saving a diary!");
});
