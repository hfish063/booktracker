package dev.hfish.booktracker.service.complete;

import dev.hfish.booktracker.entities.CompleteList;

import java.util.List;
import java.util.UUID;

public interface CompleteListService {
    public List<CompleteList> findAll();
    public CompleteList findById(UUID theId);
    public CompleteList save(CompleteList theCompleteList);
    public void deleteById(UUID theId);
}
