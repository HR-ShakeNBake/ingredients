# Shake 'n' Bake

> This project builds out the front-end for a service that renders ingredient information for a given recipe. A user can adjust the recipe size or ingredient measurement system (metric or US) and the recipe is updated dynamically based on user selection. A user can enter their zip code and information on a nearby grocery store will be rendered. For any products that are on sale at that store that can be used in the recipe, product name and price will be rendered underneath the corresponding ingredient. The current iteration for thisp roject uses fake data for 100 recipes, and ~500 ingredients, ~100 stores, and ~500 suggested fake products. 

## Related Projects

  - https://github.com/HR-ShakeNBake/ShakeNBake-SummaryRepo
  - https://github.com/HR-ShakeNBake/directions-recommendations-service
  - https://github.com/HR-ShakeNBake/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)

## Usage

> A single fake recipe will be rendered on page load. The user can take the following actions:

1. Adjust Serving Size or Metric System - click 'servings' in the upper-right corner. This will display a dropdown form where a user can adjust the recipe size, or the metric system for the ingreidnets. When 'Adjust' is clicked, the ingredients list is re-rendered accordingly based on user selection.
2. Toggle On Sale - clicking the On Sale toggle button will show or hide a nearby store. When toggled on, information about a nearby grocery store is displayed. If that store carries any products that can be used as ingredients, then product information (product title, price) will be displayed below the corresponding ingredient. A user can click the right chevron arrow next to the store name to select another grocery store, and the available products will be updated based on that new store.
3. Update My Location - clicking the gear icon to the right of the On Sale toggle will display a form where a user can enter their zip code. Clicking 'Find Me' or updating their zip code will pull up grocery store information based on their location. This functionality is not yet built out on the back end, and instead dummy store data is displayed.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run schema
npm run react-dev
nodemon server/index.js
nodemon database/index.js
page is rendered at localhost:5000

```

