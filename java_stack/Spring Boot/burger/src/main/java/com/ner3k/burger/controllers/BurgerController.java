package com.ner3k.burger.controllers;

import com.ner3k.burger.models.Burger;
import com.ner3k.burger.services.BurgerService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


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
    @GetMapping("/{id}")
    public String renderEdit(Model model,@PathVariable Long id) {

        Burger burgerToEdit=burgerService.getBurgerById(id);

        model.addAttribute("burger", burgerToEdit);
        return "edit.jsp";
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public String updateBurger(Model model,@Valid @ModelAttribute Burger burger,BindingResult result) {
        if(result.hasErrors()){
            model.addAttribute("burger", burger);
            return "edit.jsp";
        }
        else{
            burgerService.updateBurger(burger);
        return "redirect:/burgers";}
    }
}
