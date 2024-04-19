package dev.hfish.booktracker.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "list")
public class ReadingList {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true)
    private UUID id;
    @Column(name = "title")
    private String title;
    @Column(name = "body")
    private String body;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
