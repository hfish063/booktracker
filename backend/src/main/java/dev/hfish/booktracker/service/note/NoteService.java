package dev.hfish.booktracker.service.note;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.Note;

import java.util.List;
import java.util.UUID;

public interface NoteService {
    public Note findById(UUID theId);
    public List<Note> findAllNotesByBookId(Book theBookId);
    public Note save(Note theNote);
    public void deleteById(UUID theId);
    public void deleteAllByBookId(Book theBookId);
}
