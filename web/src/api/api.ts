import { apiFetch } from "./lib/utils";

export async function getBooks() {
  const result = await apiFetch("/book/all");
  return (await result.json()) as Book[];
}

export async function getBooksForReadingList(id: string) {
  const result = await apiFetch(`/book/all/${id}`);
  return (await result.json()) as Book[];
}

export async function getBook(id: string) {
  const result = await apiFetch(`/book/${id}`);
  if (result.status != 200) {
    // TODO: error handling
    console.log("Failed to fetch book");
  }

  return (await result.json()) as Book;
}

export async function saveBook(book: BookModel) {
  const options = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(book),
  };

  const result = await apiFetch("/book/save", options);
  return (await result.json()) as Book;
}

// TODO: shorthand implementation
export async function deleteBook(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/book/delete/${id}`, {
    cache: "no-store",
    method: "DELETE",
  });
}

export async function getDetails(id: string) {
  const result = await apiFetch(`/details/${id}`);
  if (result.status != 200) {
    // TODO: error handling
    console.log("Failed to fetch book details");
  }

  return (await result.json()) as BookDetails;
}

export async function getAllDetails(data: Book[]) {
  const details: BookDetails[] = [];
  for (var i = 0; i < data.length; i++) {
    details.push(await getDetails(data[i].id));
  }

  return details;
}

export async function getAllNotesForBook(bookId: string) {
  const result = await apiFetch(`/notes/all/${bookId}`);
  return (await result.json()) as Note[];
}

export async function saveNote(note: NoteModel) {
  const options = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(note),
  };

  const result = await apiFetch("/notes/save", options);
  return (await result.json()) as Note;
}

export async function deleteNote(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/notes/delete/${id}`, {
    cache: "no-store",
    method: "DELETE",
  });
}

export async function getAllReadingLists() {
  const result = await apiFetch("/list/all");
  return (await result.json()) as ReadingList[];
}

export async function getReadingList(id: string) {
  const result = await apiFetch(`/list/${id}`);
  return (await result.json()) as ReadingList;
}

export async function saveReadingList(list: ReadingList) {
  const options = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(list),
  };

  const result = await apiFetch("/list/save", options);
  return (await result.json()) as ReadingList;
}

export async function deleteReadingList(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/list/delete/${id}`, {
    cache: "no-store",
    method: "DELETE",
  });
}

export async function deleteAllReadingLists() {
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/notes/all`, {
    cache: "no-store",
    method: "DELETE",
  });
}

export type Book = {
  id: string;
  title: string;
  author: string;
  readingListId: ReadingList;
};

export type BookModel = {
  title: string;
  author: string;
  readingListId: ReadingList;
};

export type BookDetails = {
  id: string;
  description: string;
  image_url: string;
  bookId: Book;
};

export type Note = {
  id: string;
  text: string;
  createdAt: string;
  bookId: Book;
};

export type NoteModel = {
  text: string;
  bookId: Book;
};

export type ReadingList = {
  id: string;
  title: string;
  body: string;
};

export type ReadingListModel = {
  title: string;
  body: string;
};
