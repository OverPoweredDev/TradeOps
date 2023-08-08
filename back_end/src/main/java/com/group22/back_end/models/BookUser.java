package com.group22.back_end.models;

import javax.persistence.*;

@Entity
@Table(name = "bookuser")
public class BookUser {
    @Id
    @Column(name = "BOOKUSERID")
    int bookUserId;

    @ManyToOne
    @JoinColumn(name = "BOOKID")
    Book bookId;

    @ManyToOne
    @JoinColumn(name = "USERID")
    User userId;

    public BookUser() {
    }

    public BookUser(int bookUserId, Book bookId, User userId) {
        this.bookUserId = bookUserId;
        this.bookId = bookId;
        this.userId = userId;
    }

    public int getBookUserId() {
        return bookUserId;
    }

    public void setBookUserId(int bookUserId) {
        this.bookUserId = bookUserId;
    }

    public Book getBookId() {
        return bookId;
    }

    public void setBookId(Book bookId) {
        this.bookId = bookId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }
}
