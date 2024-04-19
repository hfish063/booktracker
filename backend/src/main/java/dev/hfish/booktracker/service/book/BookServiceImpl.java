package dev.hfish.booktracker.service.book;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.ReadingList;
import dev.hfish.booktracker.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookServiceImpl implements BookService {
    private BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public List<Book> findAllByReadingListId(ReadingList theReadingListId) {
        return bookRepository.findAllByReadingListId(theReadingListId);
    }

    @Override
    public Book findById(UUID theId) {
        Optional<Book> result = bookRepository.findById(theId);

        if (result.isEmpty()) {
            throw new RuntimeException("Failed to locate book with UUID: " + theId);
        }
        return result.get();
    }

    @Override
    public Book save(Book theBook) {
        return bookRepository.save(theBook);
    }

    @Override
    public void deleteById(UUID theId) {
        bookRepository.deleteById(theId);
    }
}
