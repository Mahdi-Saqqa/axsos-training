package com.nereek.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.nereek.books.models.Book;
import com.nereek.books.services.BookService;

@Controller
public class BoookController {
	@Autowired
	BookService bookService;
	@GetMapping("books/{id}")
	public String book(Model model,@PathVariable("id") long id) {
		Book book=bookService.findBook(id);
		model.addAttribute(book);
		
		return "book.jsp";
	}
	
	@GetMapping("/books")
	public String index(Model model) {
		List<Book> books=bookService.allBooks();
		model.addAttribute("books",books);
		return "index.jsp";
	}
	
}
