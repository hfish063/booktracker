import { Note, deleteNote } from "@/api/api";
import DateBadge from "./date-badge";
import { Dispatch, SetStateAction } from "react";

export default function NoteList({ data, setNotes }: NoteListParams) {
  function handleClick(id: string) {
    if (confirm("Are you sure you wish to delete this entry?")) {
      deleteNote(id);
      const newData = data.filter((data) => data.id !== id);
      setNotes(newData);
    }
  }

  return (
    <ul className="border border-gray-200 rounded overflow-hidden shadow-md w-1/2 mt-2 md-2">
      {data.map((note) => {
        return (
          <li
            className="flex justify-between group px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200"
            key={note.id}
          >
            <div className="flex flex-col items-start break-all">
              <DateBadge date={note.createdAt} />
              {note.text}
            </div>
            <button
              className="invisible group-hover:visible bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-2 mb-2 rounded"
              onClick={() => handleClick(note.id)}
            >
              Delete
            </button>
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
