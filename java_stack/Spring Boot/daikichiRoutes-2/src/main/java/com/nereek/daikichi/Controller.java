package com.nereek.daikichi;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.PathVariable;
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
    @RequestMapping("/travel/{word}")
    public String travel(@PathVariable("word") String word){

    	return "Congratulations! You will soon travel to  " + word +"!";
    }  
    @RequestMapping("/lotto/{Id}")
    public String showLesson(@PathVariable("Id") Integer Id){
    	String messege;
    	ArrayList<String> lotto = new ArrayList<String>();
    	lotto.add("I won 10,000$");
    	lotto.add("I won 100$");
    	lotto.add("I won free tickets");
    	lotto.add("I wON THE LOTTERY");
    	lotto.add("I won the Grand Prize");
    	messege=lotto.get(Id%5);
    	return messege;
    }
}
