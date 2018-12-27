import { toggleAddedToCart } from '../client/src/components/StateFunctions.js';

test("toggleAddedToCart toggles an item's state boolean value" () => {
  const startState = {
    addedToCart: false
  };

  const finState = toggleAddedToCart(startState);

  expect(finState).toEqual(
    {addedToCart: true}
  );
}
);
