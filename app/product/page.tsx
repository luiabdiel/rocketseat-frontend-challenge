'use client'

import { BackButton, DefaultPageLayout, ShopBagIcon } from '@/components'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/Format'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    gap: 32px;

    width: 100%;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background-color: var(--bg-btn-product);
        mix-blend-mode: multiply;
        border-radius: 4px;
        border: none;
        padding: 10px 0;
        color: var(--white);

        text-align: center;
        font-weight: 500;
        font-size: 16px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
`

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);

    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    color: var(--shapes-dark);

    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark);
  }

  div {
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      color: var(--text-dark);
    }

    p {
      font-size: 14px;
    }
  }
`

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useProduct(searchParams.id)

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem('cart-items')
    if (cartItems) {
      const cartItemsArray = JSON.parse(cartItems)

      const existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id,
      )

      if (existingProductIndex !== -1) {
        cartItemsArray[existingProductIndex].quantity += 1
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
      }

      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
    } else {
      const newCart = [{ ...data, quantity: 1, id: searchParams.id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart))
    }
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url || ''} alt={data?.category || ''} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <ShopBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}

export default Product
