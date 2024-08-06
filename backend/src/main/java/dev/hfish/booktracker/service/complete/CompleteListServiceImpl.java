package dev.hfish.booktracker.service.complete;

import dev.hfish.booktracker.entities.CompleteList;
import dev.hfish.booktracker.repository.CompleteListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CompleteListServiceImpl implements CompleteListService {
    private CompleteListRepository completeListRepository;

    @Autowired
    public CompleteListServiceImpl(CompleteListRepository completeListRepository) {
        this.completeListRepository = completeListRepository;
    }

    @Override
    public List<CompleteList> findAll() {
        return completeListRepository.findAll();
    }

    @Override
    public CompleteList findById(UUID theId) {
        Optional<CompleteList> result = completeListRepository.findById(theId);

        if (result.isEmpty()) {
            throw new RuntimeException("Could not locate complete list with id - " + theId);
        }

        return result.get();
    }

    @Override
    public CompleteList save(CompleteList theCompleteList) {
        return completeListRepository.save(theCompleteList);
    }

    @Override
    public void deleteById(UUID theId) {
        completeListRepository.delete(findById(theId));
    }
}
