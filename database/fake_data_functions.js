var faker = require('faker');
var math = require('mathjs');
var convert = require('convert-units');

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
  ingredient_legend_array.push([i, ingredientNameCreator(), ingredientCategoryCreator()])
}

//STORE LEGEND
var store_legend_array = [];

var storeImageUlrCreator = function() {
  var storeImages = [
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/entityType/retailerLocation/entityId/42353/usage/getRetailerLocation/chain/143x48/jewel-osco-logo-360-150.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94123/entityType/retailerLocation/entityId/83701/usage/getRetailerLocation/chain/143x48/amazonfresh-logo-360-105-v2.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94123/entityType/retailerLocation/entityId/62809/usage/getRetailerLocation/chain/143x48/safeway-logo-360-105.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60076/entityType/retailerLocation/entityId/68756/usage/getRetailerLocation/chain/143x48/walmart-360-105.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/33136/entityType/retailerLocation/entityId/24288/usage/getRetailerLocation/chain/143x48/winn-dixie-logo-360-105.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/78703/entityType/retailerLocation/entityId/54300/usage/getRetailerLocation/chain/143x48/randalls-logo-360-105.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/78722/entityType/retailerLocation/entityId/54320/usage/getRetailerLocation/chain/143x48/fiesta-mart-logo-360-105.png.d.png',
  ]
  return storeImages[Math.floor(Math.random()*storeImages.length)];
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
  var productImages = [
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/73301/recipeId/465992/upcValue/BIU_WMT18Dec1226_ChkBrst/entityType/promotion/entityId/55321207/retailerLocationId/69772/usage/getRecipeInformationByExternalId/promotion/200x188/144/BIU_WMT18Dec1226_ChkBrst.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/73301/recipeId/465992/upcValue/BIU_WMT18Dec1226_YlwOn_Five/entityType/promotion/entityId/55321280/retailerLocationId/69772/usage/getRecipeInformationByExternalId/promotion/200x188/144/BIU_WMT18Dec1226_YlwOn_Five.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94123/recipeId/465992/upcValue/BIU_AmznFrsh_B000P6J1NQ/entityType/promotion/entityId/45916780/retailerLocationId/83701/usage/getRecipeInformationByExternalId/promotion/200x188/300/BIU_AmznFrsh_B000P6J1NQ.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94123/recipeId/465992/upcValue/BIU_AmznFrsh_B008Y2QSEI/entityType/promotion/entityId/54682106/retailerLocationId/83701/usage/getRecipeInformationByExternalId/promotion/200x188/330/BIU_AmznFrsh_B008Y2QSEI.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94123/isSI/recipeId/467273/upcValue/BIU_Swanson_CBROTH/entityType/promotion/entityId/43731554/usage/getRecipeInformationByExternalId/promotion/200x188/129/BIU_Swanson_CBROTH.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/recipeId/467273/upcValue/DEMO_Walmart_SIM_Salt/entityType/promotion/entityId/21893164/retailerLocationId/68756/usage/getRecipeInformationByExternalId/promotion/200x188/144/DEMO_Walmart_SIM_Salt.png.d.png',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/isSI/recipeId/467273/upcValue/BIU_Swanson_BBROTH/entityType/promotion/entityId/43731556/usage/getRecipeInformationByExternalId/promotion/200x188/129/BIU_Swanson_BBROTH.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/recipeId/444350/upcValue/015800030621/entityType/promotion/entityId/54595414/retailerLocationId/68756/usage/getRecipeInformationByExternalId/promotion/200x188/308/015800030621.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/recipeId/455856/upcValue/DEMO_Walmart_SIM_Flour/entityType/promotion/entityId/17244823/retailerLocationId/68756/usage/getRecipeInformationByExternalId/promotion/200x188/144/DEMO_Walmart_SIM_Flour.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/recipeId/455856/upcValue/BIU_WMT18Dec1226_Orange/entityType/promotion/entityId/55321213/retailerLocationId/68756/usage/getRecipeInformationByExternalId/promotion/200x188/144/BIU_WMT18Dec1226_Orange.jpg.d.jpg',
  'https://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/60091/retailerLocationId/68756/recipeId/455856/upcValue/MWS_WMT18Dec1226_Grn_Bn/entityType/promotion/entityId/55321211/usage/getContentPairings/promotion/200x188/144/MWS_WMT18Dec1226_Grn_Bn.jpg.d.jpg'
  ]
  return productImages[Math.floor(Math.random()*productImages.length)];
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
  return Math.ceil(Math.random() * 500);
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

var metricOptions = ['cups', 'ounces', 'tablespoons', 'teaspoons', null, 'bunches', 'pinches'];

var ingredientMetricCreator = function() {
  return metricOptions[Math.floor(Math.random() * Math.random() * metricOptions.length)];
}

//100 recipes that have, on average, 10 ingredients
recipe_legend_array.forEach(item => {
  var ingredientsLength = 5 + Math.floor(Math.random()* 10);
  var randomIngredientId = () => Math.ceil(Math.random()*100)
  var randomIngredientList = [];
  for (var i = 0; i <= ingredientsLength; i++) {
    var randomIngredient = randomIngredientId();
    if (!randomIngredientList.includes(randomIngredient)) {
      var ingredientsQty = Math.ceil(Math.random() * 10);
      var ingredientMetric = ingredientMetricCreator();
      
      if (ingredientMetric === 'cups') {
        var ingredientQty2 = convert(ingredientsQty).from('cup').to('ml');
        var ingredientMetric2 = 'mL';
      }

      else if (ingredientMetric === 'ounces') {
        var ingredientQty2 = convert(ingredientsQty).from('oz').to('g');
        var ingredientMetric2 = 'g';        
      }

      else if (ingredientMetric === 'tablespoons') {
        var ingredientQty2 = convert(ingredientsQty).from('Tbs').to('ml');
        var ingredientMetric2 = 'mL';
      }

      else if (ingredientMetric === 'teaspoons') {
        var ingredientQty2 = convert(ingredientsQty).from('tsp').to('ml');
        var ingredientMetric2 = 'mL';
      }

      else {
        var ingredientQty2 = ingredientsQty;
        var ingredientMetric2 = ingredientMetric;        
      }

      recipes_ingredients_join.push([item[0], ingredientsQty, ingredientMetric, ingredientQty2, ingredientMetric2, randomIngredientId() ])
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

