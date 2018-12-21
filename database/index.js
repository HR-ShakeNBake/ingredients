const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var loremIpsum = require('lorem-ipsum');
var faker = require('faker');

//RANDOM NUMBER SEED
var num = Math.random();


/////////////////////////////////RECIPE_LEGEND
var recipe_legend_array = [];

  //will for loop, 1 to 100

var recipeNameCreator = function() {
  return faker.commerce.productName();
};


var recipeDescriptionCreator = function() {
  return faker.lorem.sentence();
}

var recipeOwnerCreator = function() {
  return faker.lorem.word();
}



for (var i = 1; i < 101; i++) {
  recipe_legend_array.push([i, recipeNameCreator(), recipeDescriptionCreator(), recipeOwnerCreator()])
}

/////////////////////////////INGREDIENT_LEGEND
var ingredient_legend_array = [];


  //METRIC
var metricOptions = ['mL', 'mg', null, 'bunches', 'pinches'];
var ingredientMetricCreator = function() {
  return metricOptions[Math.floor(Math.random() * Math.random() * metricOptions.length)];
}

  //NAME
var ingredientNameCreator = function() {
  return faker.lorem.word();
}
  //CATEGORY

var ingredientCategoryCreator = function() { 
  let result = loremIpsum({
    count: 1,
    units: 'words',
    format: 'plain',
    words: [
      'Baking Supplies',
      'Basic Cooking Ingredients',
      'Beverages',
      'Canned Foods',
      'Condiments and Salad Dressings',
      'Dairy, Eggs and Milk',
      'Herbs and Spices',
      'Meats, Fish and Seafood',
      'Produce',
      'Snacks and Sweets',
      'Other'],
    random: Math.random
});
  return result;
}

for (var i = 1; i < 501; i++) {
  ingredient_legend_array.push([i, ingredientMetricCreator(), ingredientNameCreator(), ingredientCategoryCreator()])
}

////////////////////////////////////////////STORE_LEGEND
var store_legend_array = [];

var storeImageUlrCreator = function() {
  return faker.internet.avatar();
}

var storeNameCreator = function() {
  return faker.company.companyName();
}

var storeAddressCreator = function() {
  return `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.streetSuffix()}`
}

var storeCityStateZipCreator = function() {
  return `${faker.address.city()},  ${faker.address.state()} ${faker.address.zipCode()}`
}

for (var i = 1; i < 21; i++) {
  store_legend_array.push([i, storeImageUlrCreator(), storeNameCreator(), storeAddressCreator(), storeCityStateZipCreator()])
}


//////////////////////////////////////PRODUCT_LEGEND
var product_legend_array = [];

var productPhotoUrlCreator = function() {
  return faker.internet.avatar();
}

var productNameCreator = function() {
  return faker.commerce.productName();
}


for (var i = 1; i < 501; i++) {
  product_legend_array.push([i, productPhotoUrlCreator(), productNameCreator()])
}


//////////////////////////////////////NUTRITION LEGEND
var nutrition_legend_array = [];

var nutrition_calorie_creator = function() {
  return Math.ceil(Math.random() * 200);
}

var nutrition_serving_total_creator = function() {
  return Math.ceil(Math.random() * 4);
}

for (var i = 1; i < 101; i++) {
  nutrition_legend_array.push([i, nutrition_calorie_creator(), nutrition_serving_total_creator()])
}

//////////////////////////////////////INSTRUCTION LEGEND
var instruction_legend_array = [];

var instruction_prep_time_creator = function() {
  return Math.ceil(Math.random() * 50);
}

var instruction_cook_time_creator = function() {
  return Math.ceil(Math.random() * 50);
}

for (var i = 1; i < 101; i++) {
  instruction_legend_array.push([i, instruction_prep_time_creator(), instruction_cook_time_creator()])
}




///////////////JOIN TABLES

//RECIPES_INGREDIENTS_JOIN
var recipes_ingredients_join = [];

//100 recipes that have, on average, 5 ingredients
recipe_legend_array.forEach(item => {
  var ingredientsLength = Math.floor(Math.random()* 10);
  var ingredientsQty = Math.ceil(Math.random() * 5);
  var randomIngredientId = () => Math.ceil(Math.random()*100)
  for (var i = 0; i <= ingredientsLength; i++) {
    //console.log(item[0])
    recipes_ingredients_join.push([item[0], ingredientsQty, randomIngredientId() ])
  }
})

//INGREDIENTS_PRODUCTS_JOIN
var ingredients_products_join = [];

//The first 100 ingredients each have 5 products
var productCounter = 1;
for (var i = 1; i < 101; i++) {
  for (var j = 1; j < 6; j++) {
    ingredients_products_join.push([i, productCounter])
    productCounter++;
  }
}
console.log(ingredients_products_join.length)


//PRODUCTS_STORES_JOIN
var productDealCreator = function() {
  return `$${faker.commerce.price()/10} for ${Math.ceil(Math.random() * 3)} item - expires in 1 week`
}

var products_stores_join = [];

//20 stores
for (var i = 1; i < 21; i++) {
  //50 products exist in our DB, each store will have each product
  //each store has a unique deal for that product
  for (var j = 1; j < 51; j++) {
    products_stores_join.push([i, j, productDealCreator()])
  }
}

console.log(products_stores_join);




// const getAllPhrases = function(cb) { 
// 	//select * query to get all records from our db
// 	connection.query('SELECT * FROM PHRASES', cb)

// 	//cb should have (err, results) as parameters
//   // TODO - your code here!
// };

// var sql = "INSERT INTO Test (name, email, n) VALUES ?";
// var values = [
//     ['demian', 'demian@gmail.com', 1],
//     ['john', 'john@gmail.com', 2],
//     ['mark', 'mark@gmail.com', 3],
//     ['pete', 'pete@gmail.com', 4]
// ];
// conn.query(sql, [values], function(err) {
//     if (err) throw err;
//     conn.end();
// });




///////////INSERT INTO EACH TABLE
connection.query('DELETE FROM recipes_ingredients');
connection.query('DELETE FROM ingredients_products');
connection.query('DELETE FROM products_stores');
connection.query('DELETE FROM recipe_legend');
connection.query('DELETE FROM nutrition_legend');
connection.query('DELETE FROM instruction_legend');
connection.query('DELETE FROM store_legend');
connection.query('DELETE FROM ingredient_legend');
connection.query('DELETE FROM product_legend');


//RECIPE_LEGEND TABLE
var insertIntoRecipeLegendTable = function(cb) {
 var sql = "INSERT INTO recipe_legend (id, name, description, owner) VALUES ?";
  connection.query(sql, [recipe_legend_array], cb);
}

insertIntoRecipeLegendTable( function() {});

//NUTRITION_LEGEND TABLE
var insertIntoNutritionLegendTable = function(cb) {
 var sql = "INSERT INTO nutrition_legend (id, calories, serving_total) VALUES ?";
  connection.query(sql, [nutrition_legend_array], cb);
}

insertIntoNutritionLegendTable( function() {});


//INSTRUCTION_LEGEND TABLE
var insertIntoInstructionLegendTable = function(cb) {
 var sql = "INSERT INTO instruction_legend (id, prep_time, cook_time) VALUES ?";
  connection.query(sql, [instruction_legend_array], cb);
}

insertIntoInstructionLegendTable( function() {});

//INGREDIENT_LEGEND TABLE
var insertIntoIngredientLegendTable = function(cb) {
 var sql = "INSERT INTO ingredient_legend (id, metric, name, category) VALUES ?";
  connection.query(sql, [ingredient_legend_array], cb);
}

insertIntoIngredientLegendTable( function() {});

//PRODUCT_LEGEND TABLE

var insertIntoProductLegendTable = function(cb) {
 var sql = "INSERT INTO product_legend (id, photo_url, name) VALUES ?";
  connection.query(sql, [product_legend_array], cb);
}

insertIntoProductLegendTable( function() {console.log()});


//STORE_LEGEND TABLE
var insertIntoStoreLegendTable = function(cb) {
 var sql = "INSERT INTO store_legend (id, photo_url, name, address, city_state_zip) VALUES ?";
  connection.query(sql, [store_legend_array], cb);
}

insertIntoStoreLegendTable( function() {console.log()});

//RECIPES_INGREDIENTS_JOIN TABLE
var insertIntoRecipesIngredientsTable = function(cb) {
 var sql = "INSERT INTO recipes_ingredients (recipe_id, qty, ingredient_id) VALUES ?";
  connection.query(sql, [recipes_ingredients_join], cb);
}

insertIntoRecipesIngredientsTable( function() {console.log()});


//INGREDIENTS_PRODUCTS_JOIN TABLE
var insertIntoIngredientsProductsTable = function(cb) {
 var sql = "INSERT INTO ingredients_products (ingredient_id, product_id) VALUES ?";
  connection.query(sql, [ingredients_products_join], cb);
}

insertIntoIngredientsProductsTable( function() {console.log()});

//PRODUCTS_STORES_JOIN TABLE
var insertIntoProductsStoresTable = function(cb) {
 var sql = "INSERT INTO products_stores (store_id, product_id, deal) VALUES ?";
  connection.query(sql, [products_stores_join], cb);
}

insertIntoProductsStoresTable( function(results) {console.log(results)});


// const updatePhrase = function(id, newStatus, cb) {
// 	var queryArgs = [newStatus, id]
// 	connection.query('UPDATE PHRASES SET status = ? WHERE id = ?', queryArgs, cb)
// }




module.exports = {
};