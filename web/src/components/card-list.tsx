import { Book } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CardList({ data }: CardListParams) {
  return (
    <ul className="grid grid-cols-3 grid-flow-row gap-4">
      {data.map((book) => {
        return (
          <a key={book.id} href={`/list/${book.readingListId}/${book.id}`}>
            <Card className="hover:bg-sky-100 hover:text-sky-900">
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-1">{book.author}</p>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </ul>
  );
}

type CardListParams = {
  data: Book[];
};
