package com.nereek.daikichi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class Controller {
    @RequestMapping("")
    public String index() {
        return "welcome!";
}
    @RequestMapping("/today")
    public String today() { 
        return "Today you will find luck in all your endeavors!";
}    
    @RequestMapping("/tomorrow")
    public String tomorrow() { 
    return "Tomorrow, an opporunity will araise, so be sure to be open to new ideas!";
}
    
}
