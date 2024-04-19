import { getAllNotesForBook, getDetails } from "@/api/api";
import { Link } from "@/components/link";
import NoteWrapper from "@/components/note-wrapper";
import DetailsWrapper from "@/components/details-wrapper";

export default async function Details({ params }: DetailParams) {
  const details = await getDetails(params.bookId);
  const notes = await getAllNotesForBook(params.bookId);
  return (
    <div className="flex flex-col">
      <DetailsWrapper details={details} bookId={params.bookId} />
      <NoteWrapper data={notes} bookId={params.bookId} />
      <Link path="/list" text="Back to List" />
    </div>
  );
}

type DetailParams = {
  params: {
    bookId: string;
  };
};
