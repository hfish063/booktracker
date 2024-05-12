import { ReadingList, deleteReadingList } from "@/api/api";
import { Dispatch, SetStateAction } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function ReadingCatalog({
  data,
  setReadingLists,
}: ReadingCatalogParams) {
  function handleClick(id: string) {
    if (confirm("Are you sure you wish to delete this entry?")) {
      deleteReadingList(id);
      const newData = data.filter((data) => data.id !== id);
      setReadingLists(newData);
    }
  }

  return (
    <ul className="mt-2 md-2">
      {data.map((readingList) => {
        return (
          <li key={readingList.id} className="group mt-2 md-2">
            <Card className="border-l-8 border-green-600 hover:bg-sky-100 hover:text-sky-900">
              <CardHeader>
                <CardTitle>{readingList.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div className="">{readingList.body}</div>
                  <div>
                    <a href={"/list/" + readingList.id}>
                      <Button
                        className="invisible group-hover:visible ml-4 mt-2 mb-2"
                        variant="link"
                      >
                        View
                      </Button>
                    </a>
                    <Button
                      className="self-center invisible group-hover:visible ml-4 mt-2 mb-2"
                      variant="outline"
                      onClick={() => handleClick(readingList.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
