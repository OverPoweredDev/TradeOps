package com.group22.back_end.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book {
    @Id
    @Column(name = "Id",nullable = false)
    private int bookId;

    @Column(name = "BookName")
    private String bookName;

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
