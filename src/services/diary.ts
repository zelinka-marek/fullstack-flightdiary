import { diaries } from "../../data/entries";
import type { DiaryEntry, NonSensitiveDiaryEntry } from "../types";

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

export function addDiary() {
  return null;
}
