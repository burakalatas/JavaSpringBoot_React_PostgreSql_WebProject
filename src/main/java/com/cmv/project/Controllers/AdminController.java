package com.cmv.project.Controllers;

import com.cmv.project.Models.Announcement;
import com.cmv.project.Models.Event;
import com.cmv.project.Models.News;
import com.cmv.project.Repositories.AnnouncementRepository;
import com.cmv.project.Repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private AnnouncementRepository announcementRepository;

    @PostMapping("/addnews")
    public String addNews(@RequestBody News news){
        if (news == null){
            System.out.println("News is null");
            return "News is null";
        }
        newsRepository.save(news);
        return "News added";
    }
    @GetMapping("/updatenews")
    public String updateNews(@RequestParam("id") int id, Model model){
        Optional<News> n = newsRepository.findById(id);
        model.addAttribute("news", n);

        return "redirect:/admin/addnewspage";
    }
    @PostMapping("/updatenews")
    public String updateNews(@RequestBody News news){
        if (news == null){
            System.out.println("News is null");
            return "redirect:/admin/addnewspage";
        }
        newsRepository.save(news);
        return "redirect:/admin/addnewspage";
    }
    @GetMapping("/deletenews")
    public String deleteNews(@RequestParam("id") int id){
        newsRepository.delete(newsRepository.findById(id).get());

        return "redirect:/admin/addnewspage";
    }

    @PostMapping("/addannouncement")
    public String addAnnouncement(@RequestBody Announcement a){
        if (a == null){
            System.out.println("News is null");
            return "redirect:/admin/addannouncementpage";
        }
        announcementRepository.save(a);
        return "redirect:/admin/addannouncementpage";
    }
    @GetMapping("/deneme")
    public String deneme(){
        Event n =newsRepository.findById(1).get();

        String a ="lolol";
        return a;
    }



}
