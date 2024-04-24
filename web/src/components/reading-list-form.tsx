"use client";

import { ReadingList, saveReadingList } from "@/api/api";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";

export default function ReadingListForm({ setReadingLists }: FormParams) {
  const [formData, setFormData] = useState({ title: "", body: "" });

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
            htmlFor="body"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Body
          </label>
          <input
            type="text"
            id="body"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Body"
            onChange={(e) => handleChange(e)}
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

    const result = await saveReadingList({
      title: formData.title[0],
      body: formData.body[0],
    } as ReadingList);

    // update the state, which will propagate up into the parent component and refresh the reading list data
    setReadingLists((readingLists) => [...readingLists, result]);
    console.log(result);
  }
}

type FormParams = {
  setReadingLists: Dispatch<SetStateAction<ReadingList[]>>;
};
