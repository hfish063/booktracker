package dev.hfish.booktracker.repository;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.BookDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BookDetailsRepository extends JpaRepository<BookDetails, UUID> {
    public BookDetails findBookDetailsByBookId(Book theBookId);
}
