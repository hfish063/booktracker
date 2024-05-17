import { getAllReadingLists } from "@/api/api";
import ReadingListWrapper from "@/components/reading-list/wrapper";

export default async function List() {
  const readingLists = await getAllReadingLists();
  return (
    <div className="flex flex-col gap 4">
      <h1 className="text-3xl font-semibold">Reading List Collection</h1>
      <ReadingListWrapper data={readingLists} />
    </div>
  );
}
