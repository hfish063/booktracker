"use client";

import { Note } from "@/api/api";
import NoteList from "./list";
import NoteForm from "./form";
import { useState } from "react";

export default function NoteWrapper({ data, bookId }: NoteWrapperParams) {
  const [notes, setNotes] = useState(data);

  return (
    <div className="mt-2 mb-2">
      <hr />
      <h1 className="text-3xl font-semibold">Notes</h1>
      <NoteList data={notes} setNotes={setNotes} />
      <NoteForm id={bookId} setNotes={setNotes} />
      <hr />
    </div>
  );
}

type NoteWrapperParams = {
  bookId: string;
  data: Note[];
};
