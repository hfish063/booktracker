import { getBooksForReadingList } from "@/api/api";
import BookWrapper from "@/components/book-wrapper";

export default async function Catalog({ params }: CatalogParams) {
  const books = await getBooksForReadingList(params.listId);
  return (
    <>
      <h1 className="text-3xl font-semibold">Book Catalog</h1>
      <BookWrapper data={books} />
    </>
  );
}

type CatalogParams = {
  params: {
    listId: string;
  };
};
