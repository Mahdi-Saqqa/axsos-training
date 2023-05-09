package com.ner3k.producsandcategories.services;

import com.ner3k.producsandcategories.models.Category;
import com.ner3k.producsandcategories.models.Product;
import com.ner3k.producsandcategories.repositories.CategoryRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
    public Category getCategory(Long id) {
        if(categoryRepo.findCategoryById(id).isPresent()){
            return categoryRepo.findCategoryById(id).get();
        }
        else return null;
    }
    public  List<Category> getCategoryDontContainProduct(Product product){
        return categoryRepo.findByProductsNotContains(product);
    }
    public List<Category> getCategoryContainProduct(Product product){
        return categoryRepo.findAllByProducts(product);
    }
    public Category createCategory(Category category){
        return categoryRepo.save(category);
    }
}
