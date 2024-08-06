package dev.hfish.booktracker.repository;

import dev.hfish.booktracker.entities.CompleteList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Repository
public interface CompleteListRepository extends JpaRepository<CompleteList, UUID> {
    public List<CompleteList> findAllByCompletionDate(Instant date);
}
