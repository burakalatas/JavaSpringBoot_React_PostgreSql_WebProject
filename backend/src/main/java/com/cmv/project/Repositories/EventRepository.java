package com.cmv.project.Repositories;

import com.cmv.project.Models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {
}
