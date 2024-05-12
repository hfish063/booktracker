"use client";

import { ReadingList } from "@/api/api";
import { useState } from "react";
import ReadingCatalog from "./reading-catalog";
import ReadingListForm from "./reading-list-form";

export default function ReadingListWrapper({ data }: ReadingListWrapperParams) {
  const [readingLists, setReadingLists] = useState(data);

  return (
    <div className="flex flex-col">
      <ReadingListForm setReadingLists={setReadingLists} />
      <ReadingCatalog data={readingLists} setReadingLists={setReadingLists} />
    </div>
  );
}

type ReadingListWrapperParams = {
  data: ReadingList[];
};
