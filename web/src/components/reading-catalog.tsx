import { ReadingList } from "@/api/api";
import { Dispatch, SetStateAction } from "react";
import { Link } from "./link";

export default function ReadingCatalog({
  data,
  setReadingLists,
}: ReadingCatalogParams) {
  return (
    <ul>
      {data.map((readingList) => {
        return (
          <li key={readingList.id}>
            <Link path={"/list/" + readingList.id} text={readingList.title} />
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
