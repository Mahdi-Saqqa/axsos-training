package com.ner3k.producsandcategories.services;

import com.ner3k.producsandcategories.models.Category;
import com.ner3k.producsandcategories.models.Product;
import com.ner3k.producsandcategories.repositories.ProductRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepo;

    public Product createProduct(Product product) {
        return productRepo.save(product);
    }
    public Product getProductById(Long id) {
        if (productRepo.findProductById(id).isPresent()) {
            return productRepo.findProductById(id).get();
        }
        else return null;
    }
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }
    public List<Product> getProductNotInCategory(Category category) {
        return productRepo.findByCategoriesNotContains(category);
    }
    public List<Product> getProductByCategory(Category category) {
        return productRepo.findAllByCategories(category);
    }
    public void addProductToCategory(Category category, Product product) {
        product.getCategories().add(category);
        productRepo.save(product);
    }
}
