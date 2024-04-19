"use client";
import { deleteBook } from "@/api/api";
import { useRouter } from "next/navigation";

export default function DeleteBookButton({ label, id }: DeleteButtonParams) {
  const router = useRouter();

  function handleClick() {
    if (confirm("Are you sure you wish to delete this entry?")) {
      deleteBook(id);
      router.replace("/list");
    }
  }

  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-32 mt-2 md-2"
      onClick={() => handleClick()}
    >
      {label}
    </button>
  );
}

type DeleteButtonParams = {
  label: string;
  id: string;
};
