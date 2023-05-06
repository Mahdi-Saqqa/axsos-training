package com.ner3k.burger.services;

import com.ner3k.burger.models.Burger;
import com.ner3k.burger.repositories.BurgerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BurgerService {
    @Autowired
    private BurgerRepository burgerRepository;

    public List<Burger> getAll() {

        return burgerRepository.findAll();
    }

    public Burger newBurger(Burger newBurger) {
        return burgerRepository.save(newBurger);
    }

    public Burger getBurgerById(Long id) {
        if (burgerRepository.findById(id).isPresent()) {
            return burgerRepository.findById(id).get();
        } else {
            return null;
        }
    }
    public Burger updateBurger(Burger updateBurger) {

       return burgerRepository.save(updateBurger);

    }
}

