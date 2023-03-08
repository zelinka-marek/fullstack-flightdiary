import { diaries } from "../../data/entries";
import type {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveDiaryEntry,
} from "../types";

export function getEntries(): DiaryEntry[] {
  return diaries;
}

export function getNonSensitiveEntries(): NonSensitiveDiaryEntry[] {
  return diaries.map(
    ({ id, date, weather, visibility }): NonSensitiveDiaryEntry => ({
      id,
      date,
      weather,
      visibility,
    })
  );
}

export function findDiaryById(id: number): DiaryEntry | undefined {
  const entry = diaries.find((entry) => entry.id === id);
  return entry;
}

export function addDiary(entry: NewDiaryEntry): DiaryEntry {
  const newEntry = {
    id: Math.max(...diaries.map((entry) => entry.id)) + 1,
    ...entry,
  };
  diaries.push(newEntry);

  return newEntry;
}
