package com.group22.back_end.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "book")
public class Book {
    @Id
    @Column(name = "ID",nullable = false)
    private int bookId;

    @Column(name = "BOOKNAME")
    private String bookName;

    @OneToMany(mappedBy = "bookId")
    List<BookUser> bookUsers = new ArrayList<>();

    public Book() {
    }

    public Book(int id, String bookName) {
        bookId = id;
        bookName = bookName;
    }


    public long getBookId(){
        return bookId;
    }
    public void setBookId(long id){
        this.bookId = bookId;
    }


    public String getBookName(){
        return bookName;
    }
    public void setBookName(String bookName){
        this.bookName = bookName;
    }
}
