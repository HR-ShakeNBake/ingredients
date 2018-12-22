//IMPORT
const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);
const seedDatabase = require('./fake_data_seed.js')


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});



//SELECT QUERY
var selectAllPropertiesForRecipe = function(id, cb) {
  console.log(`about to query for id ${id}`)
  var queryArgs = [id]
  var sql = `
    SELECT 
      r.name recipe_name,
      r.description recipe_description,
      r.owner recipe_owner,
      ri.qty qty,
      il.id ingredient_id,
      il.metric ingredient_metric,
      il.name ingredient_name,
      il.category ingredient_category,
      pl.id product_id,
      pl.photo_url product_photo,
      pl.name product_name,
      sl.id store_id,
      sl.photo_url store_photo,
      sl.name store_name,
      sl.address store_address,
      sl.city_state_zip store_city_state_zip
    FROM recipe_legend r
    INNER JOIN recipes_ingredients ri ON ri.recipe_id = r.id
    INNER JOIN ingredient_legend il ON il.id = ri.ingredient_id
    INNER JOIN ingredients_products ip ON ip.ingredient_id = il.id
    LEFT JOIN product_legend pl ON pl.id = ip.product_id
    LEFT JOIN products_stores ps ON ps.product_id = pl.id
    LEFT JOIN store_legend sl ON sl.id = ps.store_id
    WHERE r.id = ?`
    connection.query(sql, queryArgs, cb)
}

var selectFirstRecordForRecipe = function(id, cb) {
  var queryArgs = [id];
  var sql = `
    SELECT
      r.name recipe_name,
      r.description recipe_description,
      r.owner recipe_owner,
      ri.qty qty,
      il.id ingredient_id,
      il.metric ingredient_metric,
      il.name ingredient_name,
      il.category ingredient_category,
      nl.calories,
      nl.serving_total,
      inl.prep_time,
      inl.cook_time
    FROM recipe_legend r
    INNER JOIN recipes_ingredients ri ON ri.recipe_id = r.id
    INNER JOIN ingredient_legend il ON il.id = ri.ingredient_id
    INNER JOIN nutrition_legend nl on nl.id = r.id
    INNER JOIN instruction_legend inl on inl.id = r.id
    WHERE r.id = ?`
  connection.query(sql, queryArgs, cb)
}

module.exports.pull = selectAllPropertiesForRecipe;
module.exports.pullFirst = selectFirstRecordForRecipe;