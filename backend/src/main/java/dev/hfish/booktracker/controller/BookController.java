package dev.hfish.booktracker.controller;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.ReadingList;
import dev.hfish.booktracker.service.book.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/book")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }

    @GetMapping("/all/{readingListId}")
    public List<Book> getAllBooksForReadingList(@PathVariable("readingListId") ReadingList theReadingListId) {
        return bookService.findAllByReadingListId(theReadingListId);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable("id") UUID theBookId) {
        return bookService.findById(theBookId);
    }

    @PostMapping ("/save")
    public Book saveBook(@RequestBody Book theBook) {
        return bookService.save(theBook);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBook(@PathVariable("id") UUID theBookId) {
        bookService.deleteById(theBookId);
    }
}
