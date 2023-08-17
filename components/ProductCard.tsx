'use client'

import { formatPrice } from '@/utils/Format'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

interface ProductCardProps {
  image: string
  title: string
  price: number
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  border-radius: 0px 0px 4px 4px;

  width: 256px;

  h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0px;
      padding: 0;
      background: var(--shapes);
    }
  }
`

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  const priceFormattedForReal = formatPrice(price)

  return (
    <Card>
      <Image src={image} alt={title} width={256} height={300} />
      <div>
        <h3>{title}</h3>
        <div />
        <p>{priceFormattedForReal}</p>
      </div>
    </Card>
  )
}

export default ProductCard
