import Ingredient from '../client/src/components/IndividualIngredients.jsx';
import React from 'react';
import { mount } from 'enzyme';


test('Todo component renders the text of the todo', () => {
  const ingredient = { qty: 3, ingredient_metric: 'mL', ingredient_name: 'Milk', product_id: 4 };
  const wrapper = mount(
    <IndividualIngredient key={1} ingredient={ingredient} locationChecked={true} />
    )
  const p = wrapper.find('.productItem');
  expect(p.text()).toBe('Milk');
});

