package com.nereek.books.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.nereek.books.models.Book;
import com.nereek.books.repositories.BookRepository;
@Service
public class BookService {
 // adding the book repository as a dependency
 private final BookRepository bookRepository;
 
 public BookService(BookRepository bookRepository) {
     this.bookRepository = bookRepository;
 }
 // returns all the books
 public List<Book> allBooks() {
     return bookRepository.findAll();
 }
 // creates a book
 public Book createBook(Book b) {
     return bookRepository.save(b);
 }
 // retrieves a book
 public Book findBook(Long id) {
     Optional<Book> optionalBook = bookRepository.findById(id);
     if(optionalBook.isPresent()) {
         return optionalBook.get();
     } else {
         return null;
     }
 }
 public void deleteById(Long id) {
	 try {
		 bookRepository.deleteById(id);
	 }
	 catch(IllegalArgumentException e) {
		 System.out.println("Invalid Arguments");
	 }
	 
 }
 public Book updateBook(Long id,String title,String desc,String lang,Integer numOfPages) {
    Optional<Book> optionalBook = bookRepository.findById(id);
    if(optionalBook.isPresent()) {
        Book b = optionalBook.get();
        b.setTitle(title);
        b.setLanguage(lang);
        b.setNumberOfPages(numOfPages);
        b.setDescription(desc);
        bookRepository.save(b);
        return b;
    } else {
        return null;
    }
 }
}

