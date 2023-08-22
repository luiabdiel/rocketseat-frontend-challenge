'use client'

import { BackButton, CartItem, DefaultPageLayout } from '@/components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/ProductInCart'
import { formatPrice } from '@/utils/Format'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const CartListContainer = styled.div`
  margin-top: 24px;

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  margin-top: 24px;
`

const CartPage = () => {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    [],
  )

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0,
    )
  }

  const cartTotal = formatPrice(calculateTotal(value))

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item
      return { ...item, quantity }
    })

    console.log(newValue)

    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <CartListContainer>
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  )
}

export default CartPage
