USE kimk7p1v8cuj2kpz;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN default false,
  createdAt TIMESTAMP default now(),
  PRIMARY KEY (id)
);
