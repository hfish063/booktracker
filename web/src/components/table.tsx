"use client";

import { Book } from "@/api/api";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Table({ columns, data }: TableProps) {
  return (
    <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2 mb-2">
      <TableHead columns={columns} />
      <TableBody data={data} />
    </table>
  );
}

function TableHead({ columns }: TableHeadProps) {
  var colIndex = 0;
  return (
    <thead className="text-left text-xs text-white uppercase bg-black">
      <tr key={"header"}>
        {columns.map((column) => {
          return (
            <th key={colIndex++} scope="col" className="px-6 py-3">
              {column}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function TableBody({ data }: TableBodyProps) {
  const pathname = usePathname();
  return (
    <tbody className="text-left">
      {data.map((book) => {
        return (
          <tr key={book.id} className="hover:bg-sky-100 hover:text-sky-900">
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <a href={`${pathname}/${book.id}`}>
                <Button variant="link">Details</Button>
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

type TableProps = {
  columns: string[];
  data: Book[];
};

type TableHeadProps = {
  columns: string[];
};

type TableBodyProps = {
  data: Book[];
};
