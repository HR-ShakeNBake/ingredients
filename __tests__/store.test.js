import StoreDetails from '../client/src/components/StoreDetails.jsx';
import React from 'react';
import { mount } from 'enzyme'; 

test('Store component renders store information', () => {
  const currentStoreInfo = [{ photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/guillemboti/128.jpg', name: 'Safeway', address: '30027 Alexander Creek Hauck Fords Views', city_state_zip: 'East Dahliamouth,  Arkansas 98734' }];
  const wrapper = mount(
    <StoreDetails currentStoreInfo={currentStoreInfo} />
    )
  const p = wrapper.find('.storeSnippet');
  expect(p.text()).toBe('Safeway 30027 Alexander Creek Hauck Fords Views East Dahliamouth,  Arkansas 98734 ');
});

test('Store component calls toggleStore when chevron arrow is clicked', () => {
  const currentStoreInfo = [{ photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/guillemboti/128.jpg', name: 'Safeway', address: '30027 Alexander Creek Hauck Fords Views', city_state_zip: 'East Dahliamouth,  Arkansas 98734' }];
  const toggleStore = jest.fn();
  const wrapper = mount(
    <StoreDetails currentStoreInfo={currentStoreInfo} scrollToNextStore={toggleStore}  />
    )
  const p = wrapper.find('.fa-chevron-circle-right');
  p.simulate('click');
  expect(toggleStore).toBeCalled();
});
