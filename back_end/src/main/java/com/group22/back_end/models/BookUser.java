package com.group22.back_end.models;

import javax.persistence.*;

@Entity
@Table(name = "bookuser")
public class BookUser {
    @Id
    @Column(name = "BOOKUSERID")
    int bookUserId;

//    @ManyToMany
    @Column(name = "BOOKID")
    int bookId;

//    @ManyToMany
    @Column(name = "USERID")
    int userId;

    public BookUser() {
    }

    public BookUser(int bookUserId, int bookId, int userId) {
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

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
