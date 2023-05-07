package com.ner3k.dojoandninja.repositories;


import com.ner3k.dojoandninja.models.Ninja;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja,Long> {
    List<Ninja> findAll();
    Optional<Ninja> findById(Long id);

}
