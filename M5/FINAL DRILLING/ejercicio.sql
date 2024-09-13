-- Customers
INSERT INTO customer    (store_id, first_name, last_name, email, address_id, activebool, last_update) VALUES 
(1, 'NameCustomer1', 'LastNameCustomer1', 'mail1@pmail.com', 1, TRUE, CURRENT_TIMESTAMP),
(2, 'NameCustomer2', 'LastNameCustomer2', 'mail2@pmail.com', 1, TRUE, CURRENT_TIMESTAMP),
(1, 'NameCustomer3', 'LastNameCustomer3', 'mail3@pmail.com', 1, TRUE, CURRENT_TIMESTAMP);
UPDATE customer SET first_name = 'Name Customer 1', last_name = 'LastName Customer 1', last_update = CURRENT_TIMESTAMP WHERE email = 'mail1@pmail.com';
UPDATE customer SET first_name = 'Name Customer 2', last_name = 'LastName Customer 2', last_update = CURRENT_TIMESTAMP WHERE email = 'mail2@pmail.com';
UPDATE customer SET first_name = 'Name Customer 3', last_name = 'LastName Customer 3', last_update = CURRENT_TIMESTAMP WHERE email = 'mail3@pmail.com';
DELETE FROM customer WHERE email = 'mail1@pmail.com';
DELETE FROM customer WHERE email = 'mail2@pmail.com';
DELETE FROM customer WHERE email = 'mail3@pmail.com';

-- Staffs
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password, last_update) VALUES 
('NameStaff1', 'LastNameStaff1', 1, 'email1@example.com', 3, TRUE, 'username', 'password', CURRENT_TIMESTAMP),
('NameStaff2', 'LastNameStaff2', 1, 'email2@example.com', 4, TRUE, 'username', 'password', CURRENT_TIMESTAMP),
('NameStaff3', 'LastNameStaff3', 1, 'email3@example.com', 5, TRUE, 'username', 'password', CURRENT_TIMESTAMP);
UPDATE staff SET first_name = 'Name Staff 1', last_name = 'Last Name Staff 1', last_update = CURRENT_TIMESTAMP WHERE email = 'email1@example.com';
UPDATE staff SET first_name = 'Name Staff 2', last_name = 'Last Name Staff 2', last_update = CURRENT_TIMESTAMP WHERE email = 'email2@example.com';
UPDATE staff SET first_name = 'Name Staff 3', last_name = 'Last Name Staff 3', last_update = CURRENT_TIMESTAMP WHERE email = 'email3@example.com';
DELETE FROM staff WHERE email = 'email1@example.com';
DELETE FROM staff WHERE email = 'email2@example.com';
DELETE FROM staff WHERE email = 'email3@example.com';

-- Actors
INSERT INTO actor (first_name, last_name, last_update) VALUES 
('NameActor1', 'LastNameActor1', CURRENT_TIMESTAMP),
('NameActor2', 'LastNameActor2', CURRENT_TIMESTAMP),
('NameActor3', 'LastNameActor3', CURRENT_TIMESTAMP);
UPDATE actor SET first_name = 'Name Actor 1', last_name = 'Last Name Actor 1', last_update = CURRENT_TIMESTAMP WHERE first_name = 'NameActor1';
UPDATE actor SET first_name = 'Name Actor 2', last_name = 'Last Name Actor 2', last_update = CURRENT_TIMESTAMP WHERE first_name = 'NameActor2';
UPDATE actor SET first_name = 'Name Actor 3', last_name = 'Last Name Actor 3', last_update = CURRENT_TIMESTAMP WHERE first_name = 'NameActor3';
DELETE FROM actor WHERE first_name = 'Name Actor 1';
DELETE FROM actor WHERE first_name = 'Name Actor 2';
DELETE FROM actor WHERE first_name = 'Name Actor 3';

-- List "rental-customer”
SELECT
    r.rental_id, r.rental_date, r.inventory_id, r.customer_id, r.return_date, r.staff_id,
    c.customer_id, c.first_name, c.last_name, c.email, c.address_id, c.active
FROM rental r
INNER JOIN customer c ON r.customer_id = c.customer_id
WHERE 
EXTRACT(YEAR FROM r.rental_date) = 2006 
AND EXTRACT(MONTH FROM r.rental_date) = 2
ORDER BY c.last_name ASC;


-- List “payment”
SELECT
    payment_id AS "Número", payment_date AS "Fecha", amount AS "Total"
FROM payment 
ORDER BY payment_date ASC;

-- List "films"
SELECT
    film_id, title, description, release_year, rental_rate, length, replacement_cost, rating, last_update
FROM film
WHERE
    release_year = 2006
AND rental_rate > 4.0 
ORDER BY title ASC;
