package com.ner3k.producsandcategories.repositories;

import com.ner3k.producsandcategories.models.Category;
import com.ner3k.producsandcategories.models.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends CrudRepository<Product,Long> {

    Optional<Product> findProductById(long id);
    List<Product> findAll();
    List<Product> findByCategoriesNotContains(Category category);
    List<Product> findAllByCategories(Category category);
}
