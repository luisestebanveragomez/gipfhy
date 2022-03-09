import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';

import { GifExpertApp } from '../GifExpertApp';

describe('pruebas en <GifExpertApp />', () => {

  test('debe mostrarse correctamente', () => {

    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();

  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['halo', 'hola'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe( categories.length )
  })

});