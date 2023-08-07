package com.group22.back_end.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bookuser")
public class BookUser {
    @Id
    @Column(name = "BookUserId")
    int bookUserId;

    @Column(name = "BookId")
    int bookId;

    @Column(name = "UserId")
    int UserId;

    public BookUser() {
    }

    public BookUser(int bookUserId, int bookId, int userId) {
        this.bookUserId = bookUserId;
        this.bookId = bookId;
        UserId = userId;
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
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }
}
