import { Note, deleteNote } from "@/api/api";
import DateBadge from "../misc/date-badge";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

export default function NoteList({ data, setNotes }: NoteListParams) {
  function handleClick(id: string) {
    if (confirm("Are you sure you wish to delete this entry?")) {
      deleteNote(id);
      const newData = data.filter((data) => data.id !== id);
      setNotes(newData);
    }
  }

  return (
    <ul className="border border-green-600 rounded overflow-hidden shadow-md w-1/2 mt-2 md-2">
      {data.map((note) => {
        return (
          <li
            className="flex justify-between group px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200"
            key={note.id}
          >
            <div className="flex flex-col items-start text-wrap">
              <DateBadge date={note.createdAt} />
              <div className="break-all">{note.text}</div>
            </div>

            <Button
              className="self-center invisible group-hover:visible ml-4 mt-2 mb-2 h-full"
              variant="destructive"
              onClick={() => handleClick(note.id)}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

type NoteListParams = {
  data: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};
