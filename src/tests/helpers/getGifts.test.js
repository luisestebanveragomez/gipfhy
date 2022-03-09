import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifts Fetch', () => {
  test('debe tener 10 elementos', async() => {

    const gifs = await getGifs('halo');

    expect( gifs.length ).toBe( 10 );

  })

  test('debe tener 0 elementos', async() => {

    const gifs = await getGifs('');

    expect( gifs.length ).toBe( 0 );

  })
})