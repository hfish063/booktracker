import { getAllNotesForBook, getDetails } from "@/api/api";
import NoteWrapper from "@/components/note/note-wrapper";
import DetailsWrapper from "@/components/book/details-wrapper";
import { Button } from "@/components/ui/button";

export default async function Details({ params }: DetailParams) {
  const details = await getDetails(params.bookId);
  const notes = await getAllNotesForBook(params.bookId);
  return (
    <div className="flex flex-col justify-start">
      <DetailsWrapper details={details} bookId={params.bookId} />
      <NoteWrapper data={notes} bookId={params.bookId} />
      <a className="w-20" href="/list">
        <Button className="w-full" variant="link">
          Back to list
        </Button>
      </a>
    </div>
  );
}

type DetailParams = {
  params: {
    bookId: string;
  };
};
