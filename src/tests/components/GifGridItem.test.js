import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en <GifGridItem />', () => {

  const title = 'title';
  const url = 'hey';

  const wrapper = shallow(<GifGridItem title={ title } url={ url } />)

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de tener un strong con el title', () => {
    const strong = wrapper.find('strong');
    expect( strong.text().trim() ).toBe( title );
  })

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );
  })
})