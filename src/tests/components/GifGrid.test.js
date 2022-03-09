import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {

  const text = 'tomalo';

  test('debe de mostrarse correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={ text }  />);
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar items cuando se cargara imágenes useFetchGifs', () => {
    const gifs = [{
      id: '123',
      url: 'hey',
      title: 'texto'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={ text }  />);
    expect( wrapper.find('p').exists() ).toBeFalsy();
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  })
})