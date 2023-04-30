package com.nereek.displaydate;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	// class definition and imports here...
    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }
    //...
    @RequestMapping("/date")
    public String date(Model model) {
    	Date currentDate = new Date();

    	SimpleDateFormat dateFormate = new SimpleDateFormat("EEEE, MMM d, yyyy");
    	String date = dateFormate.format(currentDate);
    	model.addAttribute("date",date);
        return "date.jsp";
    }
    @RequestMapping("/time")
    public String time(Model model) {
    	Date currentDate = new Date();

    	SimpleDateFormat timeFormate = new SimpleDateFormat("h:mm a");
    	String time = timeFormate.format(currentDate);
    	model.addAttribute("time",time);
        return "time.jsp";
    }

}