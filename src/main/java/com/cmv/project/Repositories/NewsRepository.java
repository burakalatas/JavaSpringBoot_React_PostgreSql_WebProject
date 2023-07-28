package com.cmv.project.Repositories;


import com.cmv.project.Models.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Integer> {
}
