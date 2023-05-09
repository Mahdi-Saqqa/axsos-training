package com.ner3k.producsandcategories.controllers;

import com.ner3k.producsandcategories.models.Category;
import com.ner3k.producsandcategories.models.Product;
import com.ner3k.producsandcategories.services.CategoryService;
import com.ner3k.producsandcategories.services.ProductService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class AppController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProductService productService;
    @GetMapping("/")
    public String index(Model model) {
        List<Product> products = productService.getAllProducts();
        List<Category> categories = categoryService.getAllCategories();
        model.addAttribute("products", products);
        model.addAttribute("categories", categories);
        return "index.jsp";
    }
    @GetMapping("/products/new")
    public String newProduct( @ModelAttribute("product")Product product) {
        return "newProduct.jsp";
    }
    @PostMapping("/products/new")
    public String newProductAction(@Valid @ModelAttribute("product")Product product, BindingResult result){
        if(result.hasErrors()){
            return "newProduct.jsp";
        }
        else{
            productService.createProduct(product);
            return "redirect:/";
        }
    }
    @GetMapping("/categories/new")
    public String newCategory(@ModelAttribute("category")Category category){
    return "newCategory.jsp";
    }
    @PostMapping("/categories/new")
    public String newCategoryAction(@Valid @ModelAttribute("category")Category category, BindingResult result){
        if(result.hasErrors()){
            return "newCategory.jsp";
        }
        else{
            categoryService.createCategory(category);
            return "redirect:/";
        }

    }
    @GetMapping("/categories/{id}")
    public String Category(Model model, @PathVariable("id") Long id){
        Category category = categoryService.getCategory(id);

        List<Product>productsInCategory=productService.getProductByCategory(category);
        List<Product>productsNotInCategory=productService.getProductNotInCategory(category);
        model.addAttribute("productsInCategory", productsInCategory);
        model.addAttribute("productsNotInCategory", productsNotInCategory);
        model.addAttribute("category", category);
        return  "category.jsp";
    }
    @PostMapping("/categories/{id}/addproduct")
    public String AddProductToCategory(@PathVariable("id")Long categoryId, @RequestParam("product") Long productId){
        Category category = categoryService.getCategory(categoryId);
        Product product = productService.getProductById(productId);
        productService.addProductToCategory(category, product);
        return "redirect:/categories/" + category.getId();
    }
    @GetMapping("/products/{id}")
    public String product(Model model, @PathVariable("id") Long id){
        Product product= productService.getProductById(id);
        System.out.println(product.getId());
        List<Category> categoriesInProduct = categoryService.getCategoryContainProduct(product);
        List<Category> categoriesNotInProduct = categoryService.getCategoryDontContainProduct(product);
        model.addAttribute("categoriesInProduct", categoriesInProduct);
        model.addAttribute("categoriesNotInProduct", categoriesNotInProduct);
        model.addAttribute("product", product);
        return  "product.jsp";
    }
    @PostMapping("/products/{id}/addcategory")
    public String AddCategoryToProduct(@PathVariable("id")Long productId, @RequestParam("category") Long categoryId){
        Category category = categoryService.getCategory(categoryId);
        Product product = productService.getProductById(productId);
        productService.addProductToCategory(category, product);
        return "redirect:/products/" + product.getId();
    }
}
