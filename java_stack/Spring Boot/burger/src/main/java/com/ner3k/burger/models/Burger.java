package com.ner3k.burger.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="burger")
public class Burger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=4,max=200)
    private String name;
    @NotNull
    @Size(min=4,max=200)
    private String restaurant;
    @NotNull
    @Min(1)
    @Max(5)
    private int rating;
    @NotNull
    @Size(min=10 ,max=250)
    private String notes;
}
