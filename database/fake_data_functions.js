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
var metricOptions = ['cups', 'ounces', 'tablespoons', 'teaspoons', null, 'bunch', 'pinch'];

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

//STORE LEGEND
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

//NUTRITION LEGEND
var nutrition_legend_array = [];

var nutrition_calorie_creator = function() {
  return Math.ceil(Math.random() * 200);
}

var nutrition_serving_total_creator = function() {
  return 3 + Math.ceil(Math.random() * 4);
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


//RECIPES-INGREDIENTS JOIN TABLE
var recipes_ingredients_join = [];

//100 recipes that have, on average, 10 ingredients
recipe_legend_array.forEach(item => {
  var ingredientsLength = 5 + Math.floor(Math.random()* 10);
  var randomIngredientId = () => Math.ceil(Math.random()*100)
  var randomIngredientList = [];
  for (var i = 0; i <= ingredientsLength; i++) {
    var randomIngredient = randomIngredientId();
    if (!randomIngredientList.includes(randomIngredient)) {
      var ingredientsQty = Math.ceil(Math.random() * 10);
      recipes_ingredients_join.push([item[0], ingredientsQty, randomIngredientId() ])
    }
  }
})

//INGREDIENTS-PRODUCTS JOIN TABLE
var ingredients_products_join = [];

//Planned assumption: the first 100 ingredients each have 5 products
var productCounter = 1;
for (var i = 1; i < 101; i++) {
  for (var j = 1; j < 6; j++) {
    ingredients_products_join.push([i, productCounter])
    productCounter++;
  }
}


//PRODUCTS-STORES JOIN TABLE
var productDealCreator = function() {
  return `$${faker.commerce.price()} for ${Math.ceil(Math.random() * 3)} item - expires in 1 week`
}

var products_stores_join = [];

//20 stores
for (var i = 1; i < 21; i++) {
  //500 products
  for (var j = 1; j < 501; j+=5) {
    //A store has a 50% chance of carrying a product
    //Each store will only carry one product for a given ingredient
    if (Math.random() > 0.50) {
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

