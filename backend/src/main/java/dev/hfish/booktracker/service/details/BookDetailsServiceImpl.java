package dev.hfish.booktracker.service.details;

import dev.hfish.booktracker.client.RestClient;
import dev.hfish.booktracker.client.model.BookDetailsDto;
import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.BookDetails;
import dev.hfish.booktracker.repository.BookDetailsRepository;
import dev.hfish.booktracker.service.book.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BookDetailsServiceImpl implements BookDetailsService {
    BookService bookService;
    BookDetailsRepository bookDetailsRepository;
    RestClient restClient;

    @Autowired
    public BookDetailsServiceImpl(BookService bookService, BookDetailsRepository bookDetailsRepository, RestClient restClient) {
        this.bookService = bookService;
        this.bookDetailsRepository = bookDetailsRepository;
        this.restClient = restClient;
    }

    @Override
    public BookDetails findByBookId(UUID theBookId) {
        Book book = bookService.findById(theBookId);
        BookDetails result = bookDetailsRepository.findBookDetailsByBookId(book);

        if (result == null) {
            BookDetailsDto response = restClient.fetchDetailsForBook(book.getTitle());
            result = response.mapToEntity(book);
            bookDetailsRepository.save(result);
        }
        return result;
    }
}
