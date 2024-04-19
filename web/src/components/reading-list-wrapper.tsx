"use client";

import { ReadingList } from "@/api/api";
import { useState } from "react";
import ReadingCatalog from "./reading-catalog";

export default function ReadingListWrapper({ data }: ReadingListWrapperParams) {
  const [readingLists, setReadingLists] = useState(data);

  return <ReadingCatalog data={data} setReadingLists={setReadingLists} />;
}

type ReadingListWrapperParams = {
  data: ReadingList[];
};
