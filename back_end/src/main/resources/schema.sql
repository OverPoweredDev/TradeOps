-- CREATE SCHEMA IF NOT EXISTS Bonds;
drop table if exists book;
-- Create the trade table
CREATE TABLE book (
    Id int primary key not null,
    BookName varchar(20)
);

drop table if exists security;
-- Create the trade table
CREATE TABLE security (
    Id INT primary key not null,
    ISIN int not null,
    CUSIP int not null,
    Issuer varchar(20),
    MaturityDate date,
    Coupon float,
    Type varchar(10),
    FaceValue float,
    Status varchar(20)
);

drop table if exists counterparty;
-- Create the trade table
CREATE TABLE counterparty (
    Id INT primary key not null,
    Name varchar(20)
);

drop table if exists user;
-- Create the trade table
CREATE TABLE user (
    Id int primary key not null,
    Name varchar(20),
    Email varchar(20),
    Role varchar(20)

);

drop table if exists trade;
-- Create the trade table
CREATE TABLE trade (
    Id INT PRIMARY KEY not null,
    BookId INT not null,
    CounterpartyId INT not null,
    SecurityId INT not null,
    Quantity INT,
    Status varchar(10),
    Price float,
    Buy_Sell varchar(10),
    TradeDate date not null,
    SettlementDate date,
    -- Add more fields as needed
    
    FOREIGN KEY (BookId) REFERENCES book(Id),
    FOREIGN KEY (CounterpartyId) REFERENCES counterparty(Id),
    Foreign key (SecurityId) REFERENCES security(Id)
);


drop table if exists bookuser;
-- Create the trade table
CREATE TABLE bookuser (
    BookUserId int primary key not null,
    BookId int not null,
    UserId int not null,

    foreign key (BookId) REFERENCES book(Id),
    foreign key (UserId) REFERENCES user(Id)
);




