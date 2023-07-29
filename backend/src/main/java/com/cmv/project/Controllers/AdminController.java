package com.cmv.project.Controllers;

import com.cmv.project.Models.Announcement;
import com.cmv.project.Models.News;
import com.cmv.project.Repositories.AnnouncementRepository;
import com.cmv.project.Repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin
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
    @GetMapping("/findnewsbyid")
    public Optional<News> findNewsById(@RequestParam("id") int id){
        return newsRepository.findById(id);
    }
    @PostMapping("/updatenews")
    public String updateNews(@RequestBody News news){
        if (news == null){
            System.out.println("News is null");
            return "News is null";
        }
        Optional<News> n = newsRepository.findById(news.getId());
        if (news.getSubject() != null && !news.getSubject().equals("")){n.get().setSubject(news.getSubject());}
        if (news.getContent() != null && !news.getContent().equals("")){n.get().setContent(news.getContent());}
        if (news.getValidityDate() != null ){n.get().setValidityDate(news.getValidityDate());}
        if (news.getNewsAddress() != null && !news.getNewsAddress().equals("")){n.get().setNewsAddress(news.getNewsAddress());}
        newsRepository.save(n.get());

        return "News updated";
    }
    @DeleteMapping("/deletenews")
    public String deleteNews(@RequestParam("id") int id){
        newsRepository.deleteById(id);

        return "News deleted";
    }

    File directory  = new File("src/main/resources/static/images/");
    String UPLOAD_PATH = directory.getAbsolutePath()+"/";
    @PostMapping("/addannouncement")
    public String addAnnouncement(@RequestParam("file") MultipartFile file,
                                  @RequestParam String subject, @RequestParam String content,
                                  @RequestParam Date validityDate){
        String fileName = file.getOriginalFilename();
        Announcement announcement = new Announcement();
        if (subject != null && !subject.equals("")){announcement.setSubject(subject);}
        if (content != null && !content.equals("")){announcement.setContent(content);}
        announcement.setImage(fileName);
        if (validityDate != null){announcement.setValidityDate(validityDate);}
        announcementRepository.save(announcement);

        if (!file.isEmpty()) {
            try {
                file.transferTo(new File(UPLOAD_PATH + fileName));
                return "File uploaded successfully.";
            } catch (Exception e) {
                e.printStackTrace();
                return "File upload failed.";
            }
        }
        return "Announcement added";
    }
    @GetMapping("/getimage")
    public @ResponseBody byte[] getImage(@RequestParam("id") int id){
        Optional<Announcement> announcement = announcementRepository.findById(id);
        String fileName = announcement.get().getImage();
        File file = new File(UPLOAD_PATH + fileName);
        return file.toURI().toString().getBytes();
    }


    @DeleteMapping("/deleteannouncement")
    public String deleteAnnouncement(@RequestParam("id") int id){
        announcementRepository.deleteById(id);

        return "Announcement deleted";
    }
    @GetMapping("/findannouncementbyid")
    public Optional<Announcement> findAnnouncementById(@RequestParam("id") int id){
        return announcementRepository.findById(id);
    }
    @PostMapping("/updateannouncement")
    public String updateNews(@RequestBody Announcement announcement){
        if (announcement == null){
            System.out.println("Announcement is null");
            return "Announcement is null";
        }
        Optional<Announcement> n = announcementRepository.findById(announcement.getId());
        if (announcement.getSubject() != null && !announcement.getSubject().equals("")){n.get().setSubject(announcement.getSubject());}
        if (announcement.getContent() != null && !announcement.getContent().equals("")){n.get().setContent(announcement.getContent());}
        if (announcement.getValidityDate() != null ){n.get().setValidityDate(announcement.getValidityDate());}
        if (announcement.getImage() != null && !announcement.getImage().equals("")){n.get().setImage(announcement.getImage());}
        announcementRepository.save(n.get());

        return "Announcement updated";
    }
}
