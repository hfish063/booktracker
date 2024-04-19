package dev.hfish.booktracker.service.note;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.Note;
import dev.hfish.booktracker.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NoteServiceImpl implements NoteService {
    NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public Note findById(UUID theId) {
        Optional<Note> result = noteRepository.findById(theId);

        if (result.isEmpty()) {
            throw new RuntimeException("Could not locate Note with id - " + theId.toString());
        }

        return result.get();
    }

    @Override
    public List<Note> findAllNotesByBookId(Book theBookId) {
        return noteRepository.findAllByBookId(theBookId);
    }

    @Override
    public Note save(Note theNote) {
        return noteRepository.save(theNote);
    }

    @Override
    public void deleteById(UUID theId) {
        noteRepository.deleteById(theId);
    }

    @Override
    public void deleteAllByBookId(Book theBookId) {
        noteRepository.deleteAllByBookId(theBookId);
    }
}
