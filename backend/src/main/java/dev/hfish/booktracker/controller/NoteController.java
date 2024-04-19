package dev.hfish.booktracker.controller;

import dev.hfish.booktracker.entities.Book;
import dev.hfish.booktracker.entities.Note;
import dev.hfish.booktracker.service.note.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/notes")
public class NoteController {
    NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/{noteId}")
    public Note getNote(@PathVariable("noteId") UUID theNoteId) {
        return noteService.findById(theNoteId);
    }

    @GetMapping("/all/{bookId}")
    public List<Note> getAllNotesForBook(@PathVariable("bookId")Book theBookId) {
        return noteService.findAllNotesByBookId(theBookId);
    }

    @PostMapping("/save")
    public Note save(@RequestBody Note theNote) {
        return noteService.save(theNote);
    }

    @DeleteMapping("/delete/{noteId}")
    public void deleteNote(@PathVariable("noteId") UUID theNoteId) {
        noteService.deleteById(theNoteId);
    }

    @DeleteMapping("/delete/all/{bookId}")
    public void deleteAllNotesForBook(@PathVariable("bookId") Book theBookId) {
        noteService.deleteAllByBookId(theBookId);
    }
}
