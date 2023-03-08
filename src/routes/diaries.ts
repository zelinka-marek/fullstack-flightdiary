import express from "express";
import {
  findDiaryById,
  getNonSensitiveEntries,
  addDiary,
} from "../services/diary";

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

diaryRouter.post("/", (request, response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { date, weather, visibility, comment } = request.body;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const addedEntry = addDiary({ date, weather, visibility, comment });

  response.send(addedEntry);
});
