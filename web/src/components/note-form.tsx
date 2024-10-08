"use client";

import { Note, NoteModel, getBook, saveNote } from "@/api/api";
import { Dispatch, SetStateAction, useState } from "react";

export default function NoteForm({ id, setNotes }: NoteFormParams) {
  const [formData, setFormData] = useState({ text: "" });

  return (
    <form className="mt-2 mb-2" onSubmit={(e) => handleSubmit(e)}>
      <textarea
        id="text"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
        onChange={(e) => handleChange(e)}
        required
      ></textarea>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 mb-2"
      >
        Submit
      </button>
    </form>
  );

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!event.target) {
      return;
    }
    const element = event.target;
    setFormData({ ...formData, [element.id]: [element.value] });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parent = await getBook(id);
    const result = await saveNote({
      text: formData.text[0],
      bookId: parent,
    } as NoteModel);

    // update the state, which will propagate up into the parent component and refresh the note list data
    setNotes((notes) => [...notes, result]);
  }
}

type NoteFormParams = {
  id: string;
  setNotes: Dispatch<SetStateAction<Note[]>>;
};
