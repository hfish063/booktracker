package dev.hfish.booktracker.service.list;

import dev.hfish.booktracker.entities.ReadingList;

import java.util.List;
import java.util.UUID;

public interface ReadingListService {
    public List<ReadingList> findAll();
    public ReadingList findById(UUID theId);
    public ReadingList save(ReadingList theReadingList);
    public void deleteById(UUID theId);
    public void deleteAll();
}
