import { DetailParams } from "@/app/list/[uuid]/[uuid]/page";
import { BookModel, getBook } from "@/api/api";

export default async function BookHeading({ bookId }: BookHeadingParams) {
  const result: BookModel = await getBook(bookId);
  return (
    <div className="mb-4">
      <h1 className="text-5xl font-extrabold dark:text-black">
        {result.title}
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          {result.author}
        </small>
      </h1>
    </div>
  );
}

type BookHeadingParams = {
  bookId: string;
};
