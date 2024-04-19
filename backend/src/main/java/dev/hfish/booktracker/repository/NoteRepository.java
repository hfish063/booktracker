package dev.hfish.booktracker.repository;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface NoteRepository extends JpaRepository<Note, UUID> {
    public List<Note> findAllByBookId(Book theBookId);
    public void deleteAllByBookId(Book theBookId);
}
