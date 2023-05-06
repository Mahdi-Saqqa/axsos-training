package com.ner3k.burger.controllers;

import com.ner3k.burger.models.Burger;
import com.ner3k.burger.services.BurgerService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/burgers")
public class BurgerController {
    @Autowired
    private BurgerService burgerService;

    @GetMapping("")
    public String index(Model model,@ModelAttribute Burger burger) {
        List<Burger> allBurger=burgerService.getAll();
        model.addAttribute("allBurger", allBurger);
        return "index.jsp";
    }
    @PostMapping("")
    public String newBurger(Model model, @Valid @ModelAttribute Burger burger, BindingResult result) {
        if(result.hasErrors()){
            List<Burger> allBurger=burgerService.getAll();
            model.addAttribute("allBurger", allBurger);
            return "index.jsp";
        }
        else{
            burgerService.newBurger(burger);
        return "redirect:/burgers";}
    }

}
