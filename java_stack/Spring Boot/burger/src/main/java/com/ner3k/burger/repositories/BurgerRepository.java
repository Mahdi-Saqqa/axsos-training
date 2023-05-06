package com.ner3k.burger.repositories;

import com.ner3k.burger.models.Burger;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BurgerRepository extends CrudRepository<Burger,Long> {
    List<Burger> findAll();
}
