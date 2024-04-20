"use client";
import { deleteBook } from "@/api/api";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function DeleteBookButton({ label, id }: DeleteButtonParams) {
  const router = useRouter();

  function handleClick() {
    if (confirm("Are you sure you wish to delete this entry?")) {
      deleteBook(id);
      router.replace("/list");
    }
  }

  return (
    <Button className="mt-2 mb-2" variant={"destructive"} onClick={handleClick}>
      {label}
    </Button>
  );
}

type DeleteButtonParams = {
  label: string;
  id: string;
};
