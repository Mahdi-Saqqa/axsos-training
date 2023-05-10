package com.ner3k.myapp.controllers;
import com.ner3k.myapp.models.LoginUser;
import com.ner3k.myapp.models.User;
import com.ner3k.myapp.services.UserService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AppController {

    @Autowired
    private UserService userService;
    @GetMapping("/")
    public  String index(Model model,HttpSession session) {
        System.out.println(session.getAttribute("loggedUser"));
        if(session.getAttribute("loggedUser")!=null){
            return  "home.jsp";
        }
        else{
            model.addAttribute("newUser", new User());
            model.addAttribute("newLogin", new LoginUser());
            return "logreg.jsp";
        }

    }
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin")LoginUser loginUser, BindingResult result, Model model, HttpSession session){
        User loggedUser = userService.login(loginUser, result);
        if(result.hasErrors()){
            model.addAttribute("newUser", new User());
            return "logreg.jsp";
        }
        else{
            loggedUser.setPassword(null);
            session.setAttribute("loggedUser", loggedUser);
            System.out.println(session.getAttribute("loggedUser"));
            return "redirect:/";
        }
    }
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser")User newUser, BindingResult result, Model model, HttpSession session){
        User loggedUser = userService.register(newUser, result);
        if(result.hasErrors()){
            model.addAttribute("newLogin", new LoginUser());
            System.out.println(session.getAttribute("loggedUser"));

            return "logreg.jsp";
        }
        else{

            loggedUser.setPassword(null);
            loggedUser.setConfirmPassword(null);
            session.setAttribute("loggedUser", loggedUser);
            System.out.println(session.getAttribute("loggedUser"));
            return "redirect:/";
        }
    }
    @GetMapping("/logout")
    public String logout(HttpSession session){
        session.setAttribute("loggedUser",null);
        System.out.println(session.getAttribute("loggedUser"));

        return "redirect:/";

    }
}
