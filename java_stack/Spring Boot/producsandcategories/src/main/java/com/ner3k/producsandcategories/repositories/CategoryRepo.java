package com.ner3k.producsandcategories.repositories;

import com.ner3k.producsandcategories.models.Category;
import com.ner3k.producsandcategories.models.Product;
import java.util.List;
import java.util.Optional;
import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends CrudRepository<Category,Long> {
    // Retrieves a list of all categories for a particular product
    List<Category> findAll();
    Optional<Category> findCategoryById(Long id);
    List<Category> findAllByProducts(Product product);

    // Retrieves a list of any categories a particular product
    // does not belong to.
    List<Category> findByProductsNotContains(Product product);

}
