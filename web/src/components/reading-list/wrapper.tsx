"use client";

import { ReadingList } from "@/api/api";
import { useEffect, useState } from "react";
import ReadingCatalog from "./list";
import ReadingListForm from "./form";

export default function ReadingListWrapper({ data }: ReadingListWrapperParams) {
  const [readingLists, setReadingLists] = useState(data);

  return (
    <div className="flex flex-col space-y-4">
      <ReadingListForm setReadingLists={setReadingLists} />
      <ReadingCatalog data={readingLists} setReadingLists={setReadingLists} />
    </div>
  );
}

type ReadingListWrapperParams = {
  data: ReadingList[];
};
