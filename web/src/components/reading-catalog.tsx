import { ReadingList } from "@/api/api";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

export default function ReadingCatalog({
  data,
  setReadingLists,
}: ReadingCatalogParams) {
  return (
    <ul>
      {data.map((readingList) => {
        return (
          <li key={readingList.id}>
            <a href={"/list/" + readingList.id}>
              <Button variant="link">{readingList.title}</Button>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

type ReadingCatalogParams = {
  data: ReadingList[];
  setReadingLists: Dispatch<SetStateAction<ReadingList[]>>;
};
