"use client";

import { Book } from "@/api/api";
import BookForm from "./form";
import BookTable from "./table";
import ToggleButton from "../misc/toggle-button";
import { useState } from "react";
import BookCardList from "./card-list";

export default function BookWrapper({ data }: BookWrapperParams) {
  const [books, setBooks] = useState(data);
  const [showTable, setTable] = useState(true);
  if (!showTable) {
    return (
      <div>
        <BookForm setBooks={setBooks} />
        <ToggleButton handleClick={setTable} />
        <BookCardList data={books} />
      </div>
    );
  }
  return (
    <>
      <BookForm setBooks={setBooks} />
      <ToggleButton handleClick={setTable} />
      <BookTable columns={["Title", "Author", "Action"]} data={books} />
    </>
  );
}

type BookWrapperParams = {
  data: Book[];
};
