

export function toggleAddedToCart(state) {
	return {addedToCart: !state.addedToCart}
}

export function convertRecipeArray(currentRecipe, oldRecipeSize, newRecipeSize) {

	  var result = currentRecipe.map(function(ingredient) {
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
				qty: (ingredient.qty * newRecipeSize / oldRecipeSize).toFixed(),
				ingredient_metric: ingredient.ingredient_metric,
				qty2: (ingredient.qty2 * newRecipeSize / oldRecipeSize).toFixed(),
				ingredient_metric2: ingredient.ingredient_metric2
			}
			return obj;
	  });
	return result;
}