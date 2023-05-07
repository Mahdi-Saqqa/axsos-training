package com.ner3k.dojoandninja.controllers;

import com.ner3k.dojoandninja.models.Dojo;
import com.ner3k.dojoandninja.models.Ninja;
import com.ner3k.dojoandninja.services.DojoService;
import com.ner3k.dojoandninja.services.NinjaService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AppController {
    @Autowired
    private DojoService dojoService;
    @Autowired
    private NinjaService ninjaService;

    @GetMapping("/dojo/new")
    public String dojoNew(@ModelAttribute Dojo dojo) {
        return "newDojo.jsp";
    }
    @PostMapping("/dojo/new")
    public String dojoNewAction(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
        if(result.hasErrors()){
            return "newDojo.jsp";
        }
        else{
            dojoService.createDojo(dojo);
            return "redirect:/dojo";
        }
    }
    @GetMapping("/dojo")
    public String showDojos(Model model){
        List<Dojo> dojos=dojoService.allDojo();
        model.addAttribute("dojos", dojos);
        return "dojos.jsp";
    }
    @GetMapping("/ninja/new")
    public String ninjaNew(Model model, @ModelAttribute Ninja ninja){
        List<Dojo> dojos=dojoService.allDojo();
        model.addAttribute("dojos",dojos);
        return "newNinja.jsp";
    }
    @PostMapping("/ninja/new")
    public String ninjaNewAction(@Valid@ModelAttribute Ninja ninja,BindingResult result,Model model) {
        if (result.hasErrors()) {
            List<Dojo> dojos = dojoService.allDojo();
            model.addAttribute("dojos", dojos);
            return "newNinja.jsp";
        } else {
            ninjaService.createNinja(ninja);
            return "redirect:/dojo";

        }

    }
    @GetMapping("/dojo/{id}")
    public String showDojo(Model model, @PathVariable("id") Long id){
        model.addAttribute("ninjas", dojoService.ninjasInDojo(id));
        return "dojo.jsp";
    }


}
