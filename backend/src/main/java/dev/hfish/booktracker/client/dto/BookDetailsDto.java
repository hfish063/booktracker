package dev.hfish.booktracker.client.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.BookDetails;

public class BookDetailsDto {
    private String title;
    private String author;
    private String description;
    @JsonProperty("image_url")
    private String imageUrl;

    public BookDetailsDto(String title, String author, String description, String imageUrl) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    /**
     * Returns new BookDetails object containing the FK specified in the parent
     * @param theParent The book that these details belong to
     * @return BookDetails object containing associated FK from the parent
     */
    public BookDetails mapToEntity(Book theParent) {
        return new BookDetails(description, imageUrl, theParent);
    }
}
