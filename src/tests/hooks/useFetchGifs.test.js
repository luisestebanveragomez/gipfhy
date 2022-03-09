import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {

  test('debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('halo'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();
  })

  test('debe retornar un aareglo de images y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('halo'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toEqual(10);
    expect( loading ).toBeFalsy();
  })

})