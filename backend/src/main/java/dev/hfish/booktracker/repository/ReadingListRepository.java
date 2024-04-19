package dev.hfish.booktracker.repository;

import dev.hfish.booktracker.entities.ReadingList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReadingListRepository extends JpaRepository<ReadingList, UUID> {
}
