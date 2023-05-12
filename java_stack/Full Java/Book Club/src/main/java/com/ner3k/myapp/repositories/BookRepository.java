package com.ner3k.myapp.repositories;

import com.ner3k.myapp.models.Book;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book,Long> {
List<Book> findAll();
}
