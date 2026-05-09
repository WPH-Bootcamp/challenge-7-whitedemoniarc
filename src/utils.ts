// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

import { Todo } from "./types";

export function isTodo(data: unknown): data is Todo {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "title" in data &&
    "completed" in data &&
    "createdAt" in data
  );
}

export function isTodoArray(data: unknown): data is Todo[] {
  return Array.isArray(data) && data.every(isTodo);
}