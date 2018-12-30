import IndividualIngredient from '../client/src/components/IndividualIngredient.jsx';
import React from 'react';
import { mount } from 'enzyme';


test('Individual Ingredient component renders the text of an ingredient', () => {
  const ingredient = { qty: 3, ingredient_metric: 'mL', ingredient_name: 'Milk', product_id: 4 };
  const wrapper = mount(
    <IndividualIngredient key={1} ingredient={ingredient} locationChecked={true} />
    )
  const p = wrapper.find('.productItem');
  expect(p.text()).toBe('3 mL Milk ');
});

