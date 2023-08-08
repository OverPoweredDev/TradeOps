-- Insert dummy data into the 'book' table
INSERT INTO book (Id, BookName) VALUES
    (1, 'Book A'),
    (2, 'Book B'),
    (3, 'Book C'),
    (4, 'Book D'),
    (5, 'Book E'),
    (6, 'Book F'),
    (7, 'Book G'),
    (8, 'Book H'),
    (9, 'Book I'),
    (10, 'Book J');

-- Insert dummy data into the 'security' table with MaturityDate within the year 2023
INSERT INTO security (Id, ISIN, CUSIP, Issuer, MaturityDate, Coupon, Type, FaceValue, Status) VALUES
    (1, 123456789, 987654321, 'Issuer A', '2023-08-15', 3.5, 'Corporate', 1000, 'Active'),
    (2, 987654321, 123456789, 'Issuer B', '2023-12-31', 2.8, 'Government', 500, 'Active'),
    (3, 567890123, 456789012, 'Issuer C', '2023-07-01', 4.2, 'Municipal', 800, 'Inactive'),
    (4, 234567890, 345678901, 'Issuer D', '2023-10-10', 2.2, 'Corporate', 1500, 'Active'),
    (5, 345678901, 456789012, 'Issuer E', '2023-09-05', 3.0, 'Government', 1200, 'Active'),
    (6, 678901234, 567890123, 'Issuer F', '2023-07-15', 2.5, 'Corporate', 2000, 'Active'),
    (7, 789012345, 678901234, 'Issuer G', '2023-11-30', 3.8, 'Government', 750, 'Active'),
    (8, 890123456, 789012345, 'Issuer H', '2023-08-25', 4.0, 'Corporate', 900, 'Active'), 
    (9, 901234567, 890123456, 'Issuer I', '2023-09-12', 2.7, 'Municipal', 1100, 'Active'),
    (10, 123450987, 345671234, 'Issuer J', '2023-11-18', 3.2, 'Corporate', 1800, 'Active');

-- Insert dummy data into the 'counterparty' table
INSERT INTO counterparty (Id, Name) VALUES
    (1, 'Counterparty X'),
    (2, 'Counterparty Y'),
    (3, 'Counterparty Z'),
    (4, 'Counterparty W'),
    (5, 'Counterparty V'),
    (6, 'Counterparty U'),
    (7, 'Counterparty T'),
    (8, 'Counterparty S'),
    (9, 'Counterparty R'),
    (10, 'Counterparty Q');

-- Insert dummy data into the 'user' table
INSERT INTO user (Id, Name, Email, Role) VALUES
    (1, 'User A', 'user.a@example.com', 'Trader'),
    (2, 'User B', 'user.b@example.com', 'Analyst'),
    (3, 'User C', 'user.c@example.com', 'Manager'),
    (4, 'User D', 'user.d@example.com', 'Trader'),
    (5, 'User E', 'user.e@example.com', 'Analyst'),
    (6, 'User F', 'user.f@example.com', 'Manager'),
    (7, 'User G', 'user.g@example.com', 'Trader'),
    (8, 'User H', 'user.h@example.com', 'Analyst'),
    (9, 'User I', 'user.i@example.com', 'Manager'),
    (10, 'User J', 'user.j@example.com', 'Trader');

-- Insert dummy data into the 'trade' table with trade date lesser than settlement date and maturity date
-- Insert dummy data into the 'trade' table with the updated schema and constraints
INSERT INTO trade (Id, BookId, CounterpartyId, SecurityId, Quantity, Status, Price, Buy_Sell, TradeDate, SettlementDate) VALUES
    (1, 1, 1, 1, 100, 'Pending', 1020.50, 'Buy', '2023-01-05', '2023-01-10'),
    (2, 2, 3, 2, 50, 'Completed', 750.25, 'Sell', '2023-02-15', '2023-02-20'),
    (3, 3, 2, 3, 200, 'Completed', 980.75, 'Buy', '2023-03-20', '2023-03-25'),
    (4, 4, 4, 4, 75, 'Completed', 1125.00, 'Buy', '2023-04-10', '2023-04-15'),
    (5, 5, 5, 5, 150, 'Pending', 1440.00, 'Sell', '2023-05-05', '2023-05-10'),
    (6, 6, 6, 6, 120, 'Completed', 1500.75, 'Buy', '2023-06-10', '2023-06-15'),
    (7, 7, 7, 7, 90, 'Completed', 1225.50, 'Sell', '2023-07-05', '2023-07-10'),
    (8, 8, 8, 8, 180, 'Pending', 2200.25, 'Buy', '2023-08-01', null),
    (9, 9, 9, 9, 60, 'Completed', 900.50, 'Sell', '2023-03-05', '2023-03-10'),
    (10, 10, 10, 10, 100, 'Pending', 1200.00, 'Buy', '2023-02-10', null),
    (11, 1, 2, 1, 70, 'Completed', 780.00, 'Buy', '2023-01-10', '2023-01-15'),
    (12, 2, 3, 2, 40, 'Completed', 625.50, 'Sell', '2023-02-15', '2023-02-20'),
    (13, 3, 4, 3, 160, 'Pending', 850.25, 'Buy', '2023-01-15', '2023-01-20'),
    (14, 4, 5, 4, 85, 'Completed', 1075.50, 'Buy', '2023-02-20', '2023-02-25'),
    (15, 5, 6, 5, 120, 'Completed', 1320.00, 'Sell', '2023-03-10', '2023-03-15'),
    (16, 6, 7, 6, 95, 'Completed', 1650.75, 'Buy', '2023-04-15', '2023-04-20'),
    (17, 7, 8, 7, 180, 'Completed', 1850.25, 'Sell', '2023-05-05', '2023-05-10'),
    (18, 8, 9, 8, 50, 'Completed', 1000.50, 'Buy', '2023-06-10', '2023-06-15'),
    (19, 9, 10, 9, 80, 'Pending', 700.00, 'Sell', '2023-07-15',null),
    (20, 10, 1, 10, 110, 'Completed', 1300.00, 'Buy', '2023-08-01', '2023-08-06'),
    (21, 1, 3, 1, 90, 'Pending', 980.00, 'Buy', '2023-04-10', '2023-04-15'),
    (22, 2, 4, 2, 55, 'Completed', 720.25, 'Sell', '2023-05-05', '2023-05-10'),
    (23, 3, 5, 3, 185, 'Completed', 810.75, 'Buy', '2023-06-17', '2023-06-20'),
    (24, 4, 6, 4, 95, 'Completed', 1050.00, 'Buy', '2023-05-12', '2023-05-15'),
    (25, 5, 7, 5, 140, 'Pending', 1200.00, 'Sell', '2023-01-05', '2023-01-10'),
    (26, 6, 8, 6, 105, 'Completed', 1350.50, 'Buy', '2023-02-10', '2023-02-15'),
    (27, 7, 9, 7, 195, 'Completed', 1520.25, 'Sell', '2023-03-15', '2023-03-20'),
    (28, 8, 10, 8, 45, 'Completed', 950.00, 'Buy', '2023-04-10', '2023-04-15'),
    (29, 9, 1, 9, 70, 'Pending', 650.50, 'Sell', '2023-05-15', '2023-05-20'),
    (30, 10, 2, 10, 120, 'Completed', 1150.00, 'Buy', '2023-06-20', '2023-06-25');


-- Insert dummy data into the 'bookuser' table for the many-to-many relationship
INSERT INTO bookuser (BookUserId, BookId, UserId) VALUES
    (1, 1, 1),
    (2, 1, 2),
    (3, 2, 2),
    (4, 3, 3),
    (5, 4, 4),
    (6, 5, 5),
    (7, 6, 6),
    (8, 7, 7),
    (9, 8, 8),
    (10, 9, 9),
    (11, 10, 10),
    (12, 2, 1),
    (13, 3, 1),
    (14, 4, 2),
    (15, 5, 3),
    (16, 6, 4),
    (17, 7, 5),
    (18, 8, 6),
    (19, 9, 7),
    (20, 10, 8),
    (21, 1, 9),
    (22, 2, 10),
    (23, 3, 5),
    (24, 4, 4),
    (25, 5, 2),
    (26, 6, 1),
    (27, 7, 3),
    (28, 8, 6),
    (29, 9, 8),
    (30, 10, 10);


