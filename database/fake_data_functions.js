var faker = require('faker');

//UTILITY FUNCTION
var randomInArray = function(array) {
  return array[Math.floor(Math.random()*array.length)];
}

//RECIPE_LEGEND
var recipe_legend_array = [];

var recipeNameCreator = function() {
  const adjectives = [
    'Cheesy','Spicy','Smoked','Grilled',
    'Baked', 'Boiled', 'Mom\'s', 'Dad\'s',
    'Grandma\'s', 'Grandpa\'s', 'BBQ', 'Vegetarian',
    'Vegan', 'Healthy', 'Gluten-Free', 'Low-Calorie',
    'Low-Fat', 'Gourment', 'Paleo', 'Keto', 'High-Fiber'
  ];
  const food = [
    'Chicken', 'Beef', 'Pork', 'Spaghetti', 'Chili',
    'Mac And Cheese', 'Ramen', 'Potatoes', 'Lamb',
    'Turkey', 'Lobster', 'Clam Chowder', 'Pot Roast',
    'Shrimp', 'Tuna', 'Curry', 'Steak', 'Lunchable',
    'Pizza', 'Oysters', 'Clams', 'Mussels', 'Pizza'
  ];
  return `${randomInArray(adjectives)} ${randomInArray(food)}`;
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

//INGREDIENT_LEGEND
var ingredient_legend_array = [];
var metricOptions = ['mL', 'mg', null, 'bunch', 'pinch'];

var ingredientMetricCreator = function() {
  return metricOptions[Math.floor(Math.random() * Math.random() * metricOptions.length)];
}

var ingredientNameCreator = function() {
  return faker.lorem.word();
}

var ingredientCategoryCreator = function() { 
  let categories = [
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
      'Other']
  return `${randomInArray(categories)}`;
}

for (var i = 1; i < 501; i++) {
  ingredient_legend_array.push([i, ingredientMetricCreator(), ingredientNameCreator(), ingredientCategoryCreator()])
}

//STORE LEGEND DATA GENERATOR
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


//PRODUCT LEGEND
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

//NUTRITION LEGEND DATA GENERATOR
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

//INSTRUCTION LEGEND
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


//RECIPES-INGREDIENTS JOIN TABLE DATA GENERATOR
var recipes_ingredients_join = [];

//100 recipes that have, on average, 5 ingredients
recipe_legend_array.forEach(item => {
  var ingredientsLength = Math.floor(Math.random()* 10);
  var ingredientsQty = Math.ceil(Math.random() * 5);
  var randomIngredientId = () => Math.ceil(Math.random()*100)
  for (var i = 0; i <= ingredientsLength; i++) {
    recipes_ingredients_join.push([item[0], ingredientsQty, randomIngredientId() ])
  }
})

//INGREDIENTS-PRODUCTS JOIN TABLE DATA GENERATOR
var ingredients_products_join = [];

//Planned assumption: the first 100 ingredients each have 5 products
var productCounter = 1;
for (var i = 1; i < 101; i++) {
  for (var j = 1; j < 6; j++) {
    ingredients_products_join.push([i, productCounter])
    productCounter++;
  }
}


//PRODUCTS-STORES JOIN TABLE DATA GENERATOR
var productDealCreator = function() {
  return `$${faker.commerce.price()} for ${Math.ceil(Math.random() * 3)} item - expires in 1 week`
}

var products_stores_join = [];

//20 stores
for (var i = 1; i < 21; i++) {
  //500 products
  for (var j = 1; j < 501; j++) {
    //A store has a 25% chance of carrying a product
    if (Math.random() > 0.25) {
      products_stores_join.push([i, j, productDealCreator()])
    }
  }
}

module.exports = {
  recipe_legend_array,
  nutrition_legend_array,
  instruction_legend_array,
  ingredient_legend_array,
  product_legend_array,
  store_legend_array,
  recipes_ingredients_join,
  ingredients_products_join,
  products_stores_join
}


// ///////MYSQL PORTION - INPUTTING DATA
// connection.query('DELETE FROM recipes_ingredients');
// connection.query('DELETE FROM ingredients_products');
// connection.query('DELETE FROM products_stores');
// connection.query('DELETE FROM recipe_legend');
// connection.query('DELETE FROM nutrition_legend');
// connection.query('DELETE FROM instruction_legend');
// connection.query('DELETE FROM store_legend');
// connection.query('DELETE FROM ingredient_legend');
// connection.query('DELETE FROM product_legend');


// //RECIPE_LEGEND TABLE
// var insertIntoRecipeLegendTable = function(cb) {
//  var sql = "INSERT INTO recipe_legend (id, name, description, owner) VALUES ?";
//   connection.query(sql, [recipe_legend_array], cb);
// }

// insertIntoRecipeLegendTable( function() {});

// //NUTRITION_LEGEND TABLE
// var insertIntoNutritionLegendTable = function(cb) {
//  var sql = "INSERT INTO nutrition_legend (id, calories, serving_total) VALUES ?";
//   connection.query(sql, [nutrition_legend_array], cb);
// }

// insertIntoNutritionLegendTable( function() {});


// //INSTRUCTION_LEGEND TABLE
// var insertIntoInstructionLegendTable = function(cb) {
//  var sql = "INSERT INTO instruction_legend (id, prep_time, cook_time) VALUES ?";
//   connection.query(sql, [instruction_legend_array], cb);
// }

// insertIntoInstructionLegendTable( function() {});

// //INGREDIENT_LEGEND TABLE
// var insertIntoIngredientLegendTable = function(cb) {
//  var sql = "INSERT INTO ingredient_legend (id, metric, name, category) VALUES ?";
//   connection.query(sql, [ingredient_legend_array], cb);
// }

// insertIntoIngredientLegendTable( function() {});

// //PRODUCT_LEGEND TABLE

// var insertIntoProductLegendTable = function(cb) {
//  var sql = "INSERT INTO product_legend (id, photo_url, name) VALUES ?";
//   connection.query(sql, [product_legend_array], cb);
// }

// insertIntoProductLegendTable( function() {console.log()});


// //STORE_LEGEND TABLE
// var insertIntoStoreLegendTable = function(cb) {
//  var sql = "INSERT INTO store_legend (id, photo_url, name, address, city_state_zip) VALUES ?";
//   connection.query(sql, [store_legend_array], cb);
// }

// insertIntoStoreLegendTable( function() {console.log()});

// //RECIPES_INGREDIENTS_JOIN TABLE
// var insertIntoRecipesIngredientsTable = function(cb) {
//  var sql = "INSERT INTO recipes_ingredients (recipe_id, qty, ingredient_id) VALUES ?";
//   connection.query(sql, [recipes_ingredients_join], cb);
// }

// insertIntoRecipesIngredientsTable( function() {console.log()});


// //INGREDIENTS_PRODUCTS_JOIN TABLE
// var insertIntoIngredientsProductsTable = function(cb) {
//  var sql = "INSERT INTO ingredients_products (ingredient_id, product_id) VALUES ?";
//   connection.query(sql, [ingredients_products_join], cb);
// }

// insertIntoIngredientsProductsTable( function() {console.log()});

// //PRODUCTS_STORES_JOIN TABLE
// var insertIntoProductsStoresTable = function(cb) {
//  var sql = "INSERT INTO products_stores (store_id, product_id, deal) VALUES ?";
//   connection.query(sql, [products_stores_join], cb);
// }

// insertIntoProductsStoresTable( function() {console.log()});



// //SELECT QUERY
// var selectAllPropertiesForRecipe = function(id, cb) {
//   var queryArgs = [id]
//   var sql = `
//     select r.name, ri.*, il.*, pl.*, sl.* from recipe_legend r
//       inner join recipes_ingredients ri on ri.recipe_id = r.id
//       inner join ingredient_legend il on il.id = ri.ingredient_id
//       inner join ingredients_products ip on ip.ingredient_id = il.id
//       left join product_legend pl on pl.id = ip.product_id
//       left join products_stores ps on ps.product_id = pl.id
//       left join store_legend sl on sl.id = ps.store_id
//     where r.id = ?`
//     connection.query(sql, queryArgs, cb)
// }

// selectAllPropertiesForRecipe(1, function(err, results) {console.log(results)})
