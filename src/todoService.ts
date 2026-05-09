// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

// TODO: Import fungsi storage untuk baca/tulis file

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword

import { Todo } from "./types";
import { loadTodos, saveTodos } from "./storage";

export function addTodo(title: string): void {
  const todos = loadTodos();

  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
  saveTodos(todos);

  console.log("Todo berhasil ditambahkan.");
}

export function completeTodo(id: number): void {
  const todos = loadTodos();

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    console.log("Todo tidak ditemukan.");
    return;
  }

  todo.completed = true;
  saveTodos(todos);

  console.log("Todo berhasil diselesaikan.");
}

export function deleteTodo(id: number): void {
  const todos = loadTodos();

  const filteredTodos = todos.filter((todo) => todo.id !== id);

  if (filteredTodos.length === todos.length) {
    console.log("Todo tidak ditemukan.");
    return;
  }

  saveTodos(filteredTodos);

  console.log("Todo berhasil dihapus.");
}

export function listTodos(): void {
  const todos = loadTodos();

  if (todos.length === 0) {
    console.log("Belum ada todo.");
    return;
  }

  console.log("\n=== DAFTAR TODO ===");

  todos.forEach((todo) => {
    const status = todo.completed ? "[DONE]" : "[ACTIVE]";
    console.log(`${status} ${todo.id}. ${todo.title}`);
  });

  console.log();
}