//IMPORT
const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);
const fakeData = require('./fake_data_functions.js')

//CLEAR TABLES
connection.query('DELETE FROM recipes_ingredients');
connection.query('DELETE FROM ingredients_products');
connection.query('DELETE FROM products_stores');
connection.query('DELETE FROM recipe_legend');
connection.query('DELETE FROM nutrition_legend');
connection.query('DELETE FROM instruction_legend');
connection.query('DELETE FROM store_legend');
connection.query('DELETE FROM ingredient_legend');
connection.query('DELETE FROM product_legend');


//DEFINE SQL INSERT QUERIES

//RECIPE_LEGEND TABLE
var insertIntoRecipeLegendTable = function(cb) {
 var sql = "INSERT INTO recipe_legend (id, name, description, owner) VALUES ?";
  connection.query(sql, [fakeData.recipe_legend_array], cb);
}


//NUTRITION_LEGEND TABLE
var insertIntoNutritionLegendTable = function(cb) {
 var sql = "INSERT INTO nutrition_legend (id, calories, serving_total) VALUES ?";
  connection.query(sql, [fakeData.nutrition_legend_array], cb);
}


//INSTRUCTION_LEGEND TABLE
var insertIntoInstructionLegendTable = function(cb) {
 var sql = "INSERT INTO instruction_legend (id, prep_time, cook_time) VALUES ?";
  connection.query(sql, [fakeData.instruction_legend_array], cb);
}


//INGREDIENT_LEGEND TABLE
var insertIntoIngredientLegendTable = function(cb) {
 var sql = "INSERT INTO ingredient_legend (id, metric, name, category) VALUES ?";
  connection.query(sql, [fakeData.ingredient_legend_array], cb);
}


//PRODUCT_LEGEND TABLE

var insertIntoProductLegendTable = function(cb) {
 var sql = "INSERT INTO product_legend (id, photo_url, name) VALUES ?";
  connection.query(sql, [fakeData.product_legend_array], cb);
}


//STORE_LEGEND TABLE
var insertIntoStoreLegendTable = function(cb) {
 var sql = "INSERT INTO store_legend (id, photo_url, name, address, city_state_zip) VALUES ?";
  connection.query(sql, [fakeData.store_legend_array], cb);
}


//RECIPES_INGREDIENTS_JOIN TABLE
var insertIntoRecipesIngredientsTable = function(cb) {
 var sql = "INSERT INTO recipes_ingredients (recipe_id, qty, ingredient_id) VALUES ?";
  connection.query(sql, [fakeData.recipes_ingredients_join], cb);
}


//INGREDIENTS_PRODUCTS_JOIN TABLE
var insertIntoIngredientsProductsTable = function(cb) {
 var sql = "INSERT INTO ingredients_products (ingredient_id, product_id) VALUES ?";
  connection.query(sql, [fakeData.ingredients_products_join], cb);
}


//PRODUCTS_STORES_JOIN TABLE
var insertIntoProductsStoresTable = function(cb) {
 var sql = "INSERT INTO products_stores (store_id, product_id, deal) VALUES ?";
  connection.query(sql, [fakeData.products_stores_join], cb);
}


//INVOKE SQL INSERT QUERIES
insertIntoRecipeLegendTable();
insertIntoNutritionLegendTable();
insertIntoInstructionLegendTable();
insertIntoIngredientLegendTable();
insertIntoProductLegendTable();
insertIntoStoreLegendTable();
insertIntoRecipesIngredientsTable();
insertIntoIngredientsProductsTable();
insertIntoProductsStoresTable();



//SELECT QUERY
var selectAllPropertiesForRecipe = function(id, cb) {
  var queryArgs = [id]
  var sql = `
    select r.name, ri.*, il.*, pl.*, sl.* from recipe_legend r
      inner join recipes_ingredients ri on ri.recipe_id = r.id
      inner join ingredient_legend il on il.id = ri.ingredient_id
      inner join ingredients_products ip on ip.ingredient_id = il.id
      left join product_legend pl on pl.id = ip.product_id
      left join products_stores ps on ps.product_id = pl.id
      left join store_legend sl on sl.id = ps.store_id
    where r.id = ?`
    connection.query(sql, queryArgs, cb)
}

//selectAllPropertiesForRecipe(1, function(err, results) {console.log(results)})



module.exports = {
};