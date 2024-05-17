"use client";

import { Book, BookModel, getReadingList, saveBook } from "@/api/api";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";

export default function BookForm({ setBooks }: FormParams) {
  const [formData, setFormData] = useState({ title: "", author: "" });
  const params = useParams();

  return (
    <form className="mt-2 mb-2" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid gap-6 mb-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Author"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target) {
      return;
    }
    const element = event.target as HTMLInputElement;
    setFormData({ ...formData, [element.id]: [element.value] });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let id = params.listId;

    // TODO: error handling
    if (id === "undefined") {
    } else if (Array.isArray(id)) {
    }

    const parent = await getReadingList(id as string);
    const result = await saveBook({
      title: formData.title[0],
      author: formData.author[0],
      readingListId: parent,
    } as BookModel);

    // update the state, which will propagate up into the parent component and refresh the book list data
    setBooks((books) => [...books, result]);
  }
}

type FormParams = {
  setBooks: Dispatch<SetStateAction<Book[]>>;
};
