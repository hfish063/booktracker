"use client";

import { Book } from "@/api/api";
import Form from "./book-form";
import Table from "./table";
import ToggleButton from "./toggle-button";
import { useState } from "react";
import CardList from "./card-list";

/// Client side wrapper for form and table components
export default function BookWrapper({ data }: BookWrapperParams) {
  const [books, setBooks] = useState(data);
  const [showTable, setTable] = useState(true);
  if (!showTable) {
    return (
      <>
        <Form setBooks={setBooks} />
        <ToggleButton handleClick={setTable} />
        <CardList data={books} />
      </>
    );
  }
  return (
    <>
      <Form setBooks={setBooks} />
      <ToggleButton handleClick={setTable} />
      <Table columns={["Title", "Author", "Action"]} data={books} />
    </>
  );
}

type BookWrapperParams = {
  data: Book[];
};
