package dev.hfish.booktracker.service.details;

import dev.hfish.booktracker.entities.BookDetails;

import java.util.UUID;

public interface BookDetailsService {
    public BookDetails findByBookId(UUID theId);
}
