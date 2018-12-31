export function toggleAddedToCart(state) {
	return {addedToCart: !state.addedToCart}
}

export function convertRecipeArray(currentRecipe, oldMetricSystem, newMetricSystem, oldRecipeSize, newRecipeSize) {
	//object that translates between 2 types of objects
	let metricToUs = {

	}

	let usToMetric = {

	}

	let convertSizeFunction = function(input) {

	}
	if (oldMetricSystem !== newMetricSystem) {
		//do something
	}
	var result = [];
	console.log(currentRecipe)

	  result = currentRecipe.map(function(ingredient) {
	  	let obj = {
		  	calories: ingredient.calories,
				cook_time: ingredient.cook_time,
				ingredient_category: ingredient.ingredient_category,
				ingredient_id: ingredient.ingredient_id,
				ingredient_name: ingredient.ingredient_name,
				prep_time: ingredient.prep_time,
				product_deal: ingredient.product_deal,
				product_id: ingredient.product_id,
				product_name: ingredient.product_name,
				product_url: ingredient.product_url,
				ps_product_id: ingredient.ps_product_id,
				ps_store_id: ingredient.ps_store_id,
				recipe_description: ingredient.recipe_description,
				recipe_name: ingredient.recipe_name,
				recipe_owner: ingredient.recipe_owner,
				serving_total: ingredient.serving_total,
				store_id: ingredient.store_id,
				qty: (ingredient.qty * newRecipeSize / oldRecipeSize).toFixed(2),
				ingredient_metric: ingredient.ingredient_metric
			}
			return obj;
	  });
	console.log(result)
	return result;
}