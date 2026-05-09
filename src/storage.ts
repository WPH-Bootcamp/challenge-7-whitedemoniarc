import * as fs from "fs";
import * as path from "path";

// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)


import { Todo } from "./types";
import { isTodoArray } from "./utils";

const dataDir = path.join(__dirname, "../data");
const filePath = path.join(dataDir, "todos.json");

function ensureDataFile(): void {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
  }
}

export function loadTodos(): Todo[] {
  try {
    ensureDataFile();

    const data = fs.readFileSync(filePath, "utf-8");
    const parsedData: unknown = JSON.parse(data);

    if (!isTodoArray(parsedData)) {
      throw new Error("Format data tidak valid");
    }

    return parsedData;
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return [];
  }
}

export function saveTodos(todos: Todo[]): void {
  try {
    ensureDataFile();

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  }
}