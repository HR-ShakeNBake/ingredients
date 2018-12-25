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
    WHERE r.id = ?
    ORDER BY il.id ASC`
  connection.query(sql, queryArgs, cb)
}

var getStoreArray = function(id, cb) {
  var queryArgs = [id];
  var sql = `
    SELECT DISTINCT
          sl.id store_id 
        FROM recipe_legend r
        INNER JOIN recipes_ingredients ri ON ri.recipe_id = r.id
        INNER JOIN ingredient_legend il ON il.id = ri.ingredient_id
        INNER JOIN ingredients_products ip ON ip.ingredient_id = il.id
        INNER JOIN product_legend pl ON pl.id = ip.product_id
        INNER JOIN products_stores ps ON ps.product_id = pl.id
        INNER JOIN store_legend sl ON sl.id = ps.store_id
        WHERE r.id =  ?`
  connection.query(sql, queryArgs, cb)
}

var getStoreInformation = function(id, cb) {
  var queryArgs = [id];
  var sql = `
    SELECT * from store_legend where id = ?`
  connection.query(sql, queryArgs, cb)
}

var getProductInformation = function(id, cb) {
  var queryArgs = [1]
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
        inl.cook_time,
        sl.id store_id,
        pl.id product_id,
        pl.photo_url product_url,
        pl.name product_name,
        ps.deal product_deal,
        ps.store_id ps_store_id,
        ps.product_id ps_product_id
      FROM recipe_legend r
      INNER JOIN recipes_ingredients ri ON ri.recipe_id = r.id
      INNER JOIN ingredient_legend il ON il.id = ri.ingredient_id
      INNER JOIN nutrition_legend nl on nl.id = r.id
      INNER JOIN instruction_legend inl on inl.id = r.id
      left join ingredients_products ip on ip.ingredient_id = il.id
      left join product_legend pl on pl.id = ip.product_id
      left join products_stores ps on ps.product_id = pl.id
      left join store_legend sl on sl.id = ps.store_id
      WHERE (r.id = 1 and (sl.id = ? or sl.id is null))
      order by il.id, sl.id DESC`
    connection.query(sql, queryArgs, cb)
}

module.exports.pull = selectAllPropertiesForRecipe;
module.exports.pullFirst = selectFirstRecordForRecipe;
module.exports.pullStoreArray = getStoreArray;
module.exports.pullStoreInformation = getStoreInformation;
module.exports.pullProductInformation = getProductInformation;