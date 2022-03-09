import React from 'react';
import { useState } from 'react';

import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories]  = useState(defaultCategories)

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