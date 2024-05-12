import { BookDetails } from "@/api/api";
import BookHeading from "./book-heading";
import DeleteBookButton from "./delete-book-button";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

export default function DetailsWrapper({
  details,
  bookId,
}: DetailsWrapperParams) {
  return (
    <div>
      <BookHeading bookId={bookId} />
      <hr></hr>
      <div className="flex h-80">
        <Image
          className="mt-2 mb-2 mr-4"
          src={details.image_url}
          alt="Book cover image"
          width={200}
          height={200}
        />
        <div className="overflow-hidden text-pretty mt-2 mb-2">
          <ScrollArea className="h-[350px] w-[full]">
            {details.description}
          </ScrollArea>
        </div>
      </div>
      <div>
        <DeleteBookButton label="Delete Book" id={bookId} />
      </div>
    </div>
  );
}

type DetailsWrapperParams = { details: BookDetails; bookId: string };
