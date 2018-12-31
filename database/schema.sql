CREATE DATABASE ingredients_module;

USE ingredients_module;

CREATE TABLE recipe_legend (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  description VARCHAR(100),
  owner VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE nutrition_legend (
  id int NOT NULL AUTO_INCREMENT,
  calories int,
  serving_total int,
  PRIMARY KEY (id)
);

CREATE TABLE instruction_legend (
  id int NOT NULL AUTO_INCREMENT,
  prep_time int,
  cook_time int,
  PRIMARY KEY (id)
);

CREATE TABLE store_legend (
  id int NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(100),
  name VARCHAR(50),
  address VARCHAR(100),
  city_state_zip VARCHAR(99),
  PRIMARY KEY (id)
);
CREATE TABLE ingredient_legend (
  id int NOT NULL AUTO_INCREMENT,
  -- metric VARCHAR(20),
  name VARCHAR(50),
  category VARCHAR(50),
  PRIMARY KEY (id)
);


CREATE TABLE product_legend (
  id int NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(100),
  name VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE recipes_ingredients (
  recipe_id int,
  qty int,
  metric VARCHAR(20),
  ingredient_id int,
  FOREIGN KEY (recipe_id) references recipe_legend(id),
  FOREIGN KEY (ingredient_id) references ingredient_legend(id)
);

CREATE TABLE ingredients_products (
  ingredient_id int,
  product_id int,
  FOREIGN KEY (ingredient_id) references ingredient_legend(id),
  FOREIGN KEY (product_id) references product_legend(id)
);

CREATE TABLE products_stores (
  store_id int,
  product_id int,
  deal VARCHAR(80),
  FOREIGN KEY (store_id) references store_legend(id),
  FOREIGN KEY (product_id) references product_legend(id)
);


