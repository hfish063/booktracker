import { BookDetails } from "@/api/api";
import BookHeading from "./book-heading";
import DeleteBookButton from "./delete-book-button";
import Image from "next/image";

export default function DetailsWrapper({
  details,
  bookId,
}: DetailsWrapperParams) {
  return (
    <>
      <BookHeading bookId={bookId} />
      <hr></hr>
      <div className="flex items-top mt-4">
        <Image
          className="flex-none mt-2 mb-2 mr-4"
          src={details.image_url}
          alt="Book cover image"
          width={200}
          height={200}
        />
        <p className="mt-2 mb-2 ">{details.description}</p>
      </div>
      <DeleteBookButton label="Delete Book" id={bookId} />
    </>
  );
}

type DetailsWrapperParams = { details: BookDetails; bookId: string };
