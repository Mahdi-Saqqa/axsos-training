package com.nereek.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
    @RequestMapping("/")
    public String index(@RequestParam(value="name", required=false) String name,
    		@RequestParam(value="num", required=false) Integer num){
		String res=new String();

    	if (name==null) {
    		res="<h3>Hello Human!</h3>";
    	}
    	else {
        		res="<h3>Hello "+name+ "!</h3>";
        	}
    	if(num!=null) {
    		String temp=res;
        	for(int i=1;i<num;i++) {
        		res+=temp;
        	}
    	}
    	
        return res;
    }
}
