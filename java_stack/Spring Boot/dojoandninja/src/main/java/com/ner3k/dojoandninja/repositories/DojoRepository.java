package com.ner3k.dojoandninja.repositories;

import com.ner3k.dojoandninja.models.Dojo;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DojoRepository extends CrudRepository<Dojo,Long> {
    List<Dojo> findAll();

    Optional<Dojo> findById(Long id);



}
