package dev.hfish.booktracker.controller;

import dev.hfish.booktracker.entities.BookDetails;
import dev.hfish.booktracker.service.details.BookDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/details")
public class BookDetailsController {
    BookDetailsService bookDetailsService;

    @Autowired
    public BookDetailsController(BookDetailsService bookDetailsService) {
        this.bookDetailsService = bookDetailsService;
    }

    @GetMapping("/{id}")
    public BookDetails getBookDetails(@PathVariable("id") UUID theBookId) {
        return bookDetailsService.findByBookId(theBookId);
    }
}
