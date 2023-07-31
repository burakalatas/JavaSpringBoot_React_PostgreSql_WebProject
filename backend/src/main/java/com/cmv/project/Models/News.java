package com.cmv.project.Models;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@DiscriminatorValue("news")
public class News extends Event{
    @Column(name="newsaddress",length = 10000)
    private String newsAddress;
}
