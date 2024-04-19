"use client";

import { Book } from "@/api/api";
import { Link } from "./link";
import { usePathname } from "next/navigation";

export default function Table({ columns, data }: TableProps) {
  return (
    <table className="table auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2 mb-2">
      <TableHead columns={columns} />
      <TableBody data={data} />
    </table>
  );
}

function TableHead({ columns }: TableHeadProps) {
  var colIndex = 0;
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
    <tbody>
      {data.map((book) => {
        return (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <Link path={`${pathname}/${book.id}`} text="Details" />
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
