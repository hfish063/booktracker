package dev.hfish.booktracker.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "book_details")
public class BookDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true)
    private UUID id;
    @Column(name = "description")
    private String description;
    @Column(name = "image_url")
    private String imageUrl;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book bookId;

    public BookDetails(String description, String imageUrl, Book bookId) {
        this.description = description;
        this.imageUrl = imageUrl;
        this.bookId = bookId;
    }

    public BookDetails() {

    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage_url() {
        return imageUrl;
    }

    public void setImage_url(String image_url) {
        this.imageUrl = image_url;
    }

    public Book getBookId() {
        return bookId;
    }
}
