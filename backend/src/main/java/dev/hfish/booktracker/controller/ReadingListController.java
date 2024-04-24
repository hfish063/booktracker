package dev.hfish.booktracker.controller;

import dev.hfish.booktracker.entities.ReadingList;
import dev.hfish.booktracker.service.list.ReadingListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/list")
public class ReadingListController {
    ReadingListService readingListService;

    @Autowired
    public ReadingListController(ReadingListService readingListService) {
        this.readingListService = readingListService;
    }

    @GetMapping("/all")
    public List<ReadingList> getAllReadingLists() {
        return readingListService.findAll();
    }

    @GetMapping("/{id}")
    public ReadingList getReadingList(@PathVariable("id") UUID theId) {
        return readingListService.findById(theId);
    }

    @PostMapping("/save")
    public ReadingList saveReadingList(@RequestBody ReadingList theReadingList) {
        return readingListService.save(theReadingList);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteReadingList(@PathVariable("id") UUID theId) {
        readingListService.deleteById(theId);
    }

    @DeleteMapping("/delete/all")
    public void deleteAllReadingLists() {
        readingListService.deleteAll();
    }
}
