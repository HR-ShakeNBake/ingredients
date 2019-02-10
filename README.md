# Shake 'n' Bake

> This project builds out the front-end for a service that identifies delicious recipes, and suggests where to buy their ingredients based on your location. This current iteration uses fake data for 100 recipes, and ~500 ingredients, ~100 stores, and ~500 suggested fake products. 

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

