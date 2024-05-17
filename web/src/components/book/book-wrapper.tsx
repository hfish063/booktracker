"use client";

import { Book } from "@/api/api";
import BookForm from "./book-form";
import Table from "../table";
import ToggleButton from "../toggle-button";
import { useState } from "react";
import CardList from "../card-list";

export default function BookWrapper({ data }: BookWrapperParams) {
  const [books, setBooks] = useState(data);
  const [showTable, setTable] = useState(true);
  if (!showTable) {
    return (
      <div>
        <BookForm setBooks={setBooks} />
        <ToggleButton handleClick={setTable} />
        <CardList data={books} />
      </div>
    );
  }
  return (
    <>
      <BookForm setBooks={setBooks} />
      <ToggleButton handleClick={setTable} />
      <Table columns={["Title", "Author", "Action"]} data={books} />
    </>
  );
}

type BookWrapperParams = {
  data: Book[];
};
