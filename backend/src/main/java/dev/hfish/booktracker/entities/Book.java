package dev.hfish.booktracker.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "book_catalog")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true)
    private UUID id;
    @Column(name = "title")
    private String title;
    @Column(name = "author")
    private String author;

    @ManyToOne
    @JoinColumn(name = "list_id", referencedColumnName = "id")
    private ReadingList readingListId;

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public ReadingList getReadingListId() {
        return readingListId;
    }

    public void setReadingListId(ReadingList readingListId) {
        this.readingListId = readingListId;
    }
}
