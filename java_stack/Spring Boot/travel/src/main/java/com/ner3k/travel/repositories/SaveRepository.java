package com.ner3k.travel.repositories;

import com.ner3k.travel.models.Save;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaveRepository extends CrudRepository<Save,Long> {

}
