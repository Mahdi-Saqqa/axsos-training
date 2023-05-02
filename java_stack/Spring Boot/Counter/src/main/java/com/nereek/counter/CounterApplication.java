package com.nereek.counter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;

@SpringBootApplication
@Controller

public class CounterApplication {

	public static void main(String[] args) {
		SpringApplication.run(CounterApplication.class, args);
	}
	@RequestMapping("/")
	public String index(HttpSession session) {
		if (session.getAttribute("count") == null) {
	        session.setAttribute("count", 0);
		}
		int t= (int) session.getAttribute("count");
		t++;
		session.setAttribute("count", t);
		return "index.jsp";
	}
	@RequestMapping("/counter")
	public String counter(HttpSession session) {
		
		return "counter.jsp";
	}
	@RequestMapping("/reset")
	public String reset(HttpSession session) {
		session.invalidate();
		return "counter.jsp";
	}
	@RequestMapping("/addtwo")
	public String addtwo(HttpSession session) {
		int t= (int) session.getAttribute("count");
        t+=2;
        session.setAttribute("count", t);
        return "counter.jsp";
    }

}
