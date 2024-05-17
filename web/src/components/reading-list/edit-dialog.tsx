"use client";

import { ReadingList, saveReadingList } from "@/api/api";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function EditReadingListDialog({
  list,
  setReadingLists,
}: EditReadingListParams) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Reading List</DialogTitle>
        </DialogHeader>
        <hr></hr>
        <DialogDescription>
          <EditReadingListForm list={list} setReadingLists={setReadingLists} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

function EditReadingListForm({ list, setReadingLists }: EditReadingListParams) {
  const [formData, setFormData] = useState({
    title: list.title,
    body: list.body || "",
  });
  const id = list.id;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(formData);

    const result = await saveReadingList({
      id: id,
      title: formData.title.toString(),
      body: formData.body.toString(),
    } as ReadingList);

    console.log(result);

    if (result) {
      setReadingLists((readingLists) => {
        const newData: ReadingList[] = readingLists.slice();
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id == id) {
            newData[i] = result; // update corresponding field with user-provided data
          }
        }

        return newData;
      });
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target) {
      return;
    }
    const element = event.target as HTMLInputElement;
    setFormData({ ...formData, [element.id]: [element.value] });
  }

  return (
    <form className="space-x-4 space-y-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            defaultValue={list.title}
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
            defaultValue={list.body}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

type EditReadingListParams = {
  list: ReadingList;
  setReadingLists: Dispatch<SetStateAction<ReadingList[]>>;
};
