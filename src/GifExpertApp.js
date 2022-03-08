import { useState } from 'react';

import { GifGrid } from './components/GifGrid';
import React from '.';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories]  = useState(['beach'])

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr/>

      <ol>
        {
          categories.map( category  => (
              <GifGrid
                key={ category }
                category={ category }
              />
          ))
        }
      </ol>
    </>
  )
}