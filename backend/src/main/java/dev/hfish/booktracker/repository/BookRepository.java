package dev.hfish.booktracker.repository;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.ReadingList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {
    public List<Book> findAllByReadingListId(ReadingList theReadingListId);
}
