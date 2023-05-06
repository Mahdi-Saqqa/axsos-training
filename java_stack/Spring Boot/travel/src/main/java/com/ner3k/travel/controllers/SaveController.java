package com.ner3k.travel.controllers;

import com.ner3k.travel.models.Save;
import com.ner3k.travel.services.SaveService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class SaveController {
    @Autowired
    private SaveService saveService;
    @RequestMapping("/")
    public String index(Model model, @ModelAttribute Save save) {
        List<Save> saves = saveService.findAll();
        model.addAttribute("saves", saves);
        return "index.jsp";
    }
    @PostMapping("/new")
    public String save(@Valid @ModelAttribute Save save, BindingResult result, Model model) {
        if(result.hasErrors()){
            model.addAttribute("save",save);
            return "index.jsp";
        }
        saveService.save(save);
        return "redirect:/";
    }
    @GetMapping("/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        model.addAttribute("save", saveService.findById(id));
        return "expense.jsp";
    }
    @GetMapping("/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        model.addAttribute("save", saveService.findById(id));
        return "edit.jsp";
    }
    @PostMapping("/{id}/update")
    public String update(@PathVariable("id") Long id, @Valid @ModelAttribute Save save, BindingResult result, Model model) {
        if(result.hasErrors()){
            model.addAttribute("save",save);
            return "edit.jsp";
        }
        saveService.save(save);
        return "redirect:/";
    }
    @GetMapping("/{id}/delete")
    public String delete(@PathVariable("id") Long id, Model model) {
        saveService.deleteById(id);
        return "redirect:/";
    }
}
