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
@DiscriminatorValue("announcement")
public class Announcement extends Event {
    @Column(name="image",length = 1500)
    private String image;
}
