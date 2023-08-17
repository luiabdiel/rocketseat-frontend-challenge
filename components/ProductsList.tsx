'use client'

import { useProducts } from '@/hooks/useProducts'
import React from 'react'
import { ProductCard } from '.'
import { styled } from 'styled-components'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`

const ProductsList = () => {
  const { data } = useProducts()

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ListContainer>
  )
}

export default ProductsList
