import { diaryEntries } from "../../data/entries";
import type {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveDiaryEntry,
} from "../types";

export function getEntries(): DiaryEntry[] {
  return diaryEntries;
}

export function getNonSensitiveEntries(): NonSensitiveDiaryEntry[] {
  return diaryEntries.map(
    ({ id, date, weather, visibility }): NonSensitiveDiaryEntry => ({
      id,
      date,
      weather,
      visibility,
    })
  );
}

export function findDiaryById(id: number): DiaryEntry | undefined {
  const entry = diaryEntries.find((entry) => entry.id === id);
  return entry;
}

export function addDiary(entry: NewDiaryEntry): DiaryEntry {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaryEntries.map((entry) => entry.id)) + 1,
    ...entry,
  };
  diaryEntries.push(newDiaryEntry);

  return newDiaryEntry;
}
