package com.cmv.project.Controllers;

import com.cmv.project.Models.Announcement;
import com.cmv.project.Models.Event;
import com.cmv.project.Models.News;
import com.cmv.project.Repositories.AnnouncementRepository;
import com.cmv.project.Repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private AnnouncementRepository announcementRepository;

    @GetMapping("/news")
    public List<News> getNews(){
        return newsRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }
    @GetMapping("/announcement")
    public List<Announcement> getAnnouncement(){
        return announcementRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }
}
