package dev.hfish.booktracker.service.book;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.ReadingList;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BookService {
    public List<Book> findAll();
    public List<Book> findAllByReadingListId(ReadingList theReadingListId);
    public Book findById(UUID theId);
    public Book save(Book theBook);
    public void deleteById(UUID theId);
}
