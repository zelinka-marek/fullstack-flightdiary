import express from "express";
import {
  findDiaryById,
  getNonSensitiveEntries,
  addDiary,
} from "../services/diary";
import { toNewDiaryEntry } from "../utils";

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
  try {
    const newDiaryEntry = toNewDiaryEntry(request.body);
    const addedEntry = addDiary(newDiaryEntry);

    response.send(addedEntry);
  } catch (error) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }

    response.status(400).send(errorMessage);
  }
});
