package dev.hfish.booktracker.service.list;

import dev.hfish.booktracker.entities.ReadingList;
import dev.hfish.booktracker.repository.ReadingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ReadingListServiceImpl implements ReadingListService {
    ReadingListRepository readingListRepository;

    @Autowired
    public ReadingListServiceImpl(ReadingListRepository readingListRepository) {
        this.readingListRepository = readingListRepository;
    }

    @Override
    public List<ReadingList> findAll() {
        return readingListRepository.findAll();
    }

    @Override
    public ReadingList findById(UUID theId) {
        Optional<ReadingList> result = readingListRepository.findById(theId);

        if (result.isEmpty()) {
            throw new RuntimeException("Could not locate list with UUID - " + theId);
        }

        return result.get();
    }

    @Override
    public ReadingList save(ReadingList theReadingList) {
        return readingListRepository.save(theReadingList);
    }

    @Override
    public void deleteById(UUID theId) {
        readingListRepository.deleteById(theId);
    }

    @Override
    public void deleteAll() {
        List<ReadingList> targets = findAll();

        for(ReadingList target : targets) {
            deleteById(target.getId());
        }
    }
}
