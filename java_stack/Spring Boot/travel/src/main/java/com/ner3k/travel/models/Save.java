package com.ner3k.travel.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "save")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Save {
    @Id
    @GeneratedValue
    private int id;
    @NonNull
    @Size(min=3,max=200,message="Expense length should be between 3 and 200")
    private String expense;
    @NonNull
    @Size(min=3,max=200,message="vendor length should be between 3 and 200")
    private String vendor;
    @NonNull
    private Double amount;
    @NonNull
    @Size(min=3,max=400,message="Description should be between 3 and 400")
    private String description;

}
