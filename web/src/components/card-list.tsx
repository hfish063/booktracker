import { Book } from "@/api/api";
import Card from "./card";

export default function CardList({ data }: CardListParams) {
  return (
    <ul className="flex flex-wrap">
      {data.map((book) => {
        return (
          <Card
            key={book.id}
            header={book.title}
            content={book.author}
            link={`/list/${book.id}`}
          />
        );
      })}
    </ul>
  );
}

type CardListParams = {
  data: Book[];
};
