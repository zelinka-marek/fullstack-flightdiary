import { type NewDiaryEntry, Weather, Visibility } from "./types";

function isString(param: unknown): param is string {
  return typeof param === "string" || param instanceof String;
}

function isDate(date: string): boolean {
  return Boolean(Date.parse(date));
}

function isWeather(param: string): param is Weather {
  return Object.values(Weather)
    .map((value) => value.toString())
    .includes(param);
}

function isVisibility(param: string): param is Visibility {
  return Object.values(Visibility)
    .map((value) => value.toString())
    .includes(param);
}

function parseDate(date: unknown): string {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${JSON.stringify(date)}`);
  }

  return date;
}

function parseWeather(weather: unknown): Weather {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error(`Incorrect or missing weather: ${JSON.stringify(weather)}`);
  }

  return weather;
}

function parseVisibility(visibility: unknown): Visibility {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error(
      `Incorrect or missing visibility: ${JSON.stringify(visibility)}`
    );
  }

  return visibility;
}

function parseComment(comment: unknown): string {
  if (!isString(comment)) {
    throw new Error(`Incorrect or missing comment: ${JSON.stringify(comment)}`);
  }

  return comment;
}

export function toNewDiaryEntry(data: unknown): NewDiaryEntry {
  if (!data || typeof data !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "date" in data &&
    "weather" in data &&
    "visibility" in data &&
    "comment" in data
  ) {
    const newDiaryEntry: NewDiaryEntry = {
      date: parseDate(data.date),
      weather: parseWeather(data.weather),
      visibility: parseVisibility(data.visibility),
      comment: parseComment(data.comment),
    };

    return newDiaryEntry;
  }

  throw new Error("Incorrect data: some fields are missing");
}
