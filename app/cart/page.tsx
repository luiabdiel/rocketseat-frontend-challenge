'use client'

import { BackButton, CartItem, DefaultPageLayout, Divider } from '@/components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/ProductInCart'
import { formatPrice } from '@/utils/Format'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);

    margin-top: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
      margin-left: 4px;
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

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: var(--white);

  min-width: 352px;
  padding: 16px 24px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;

    margin-bottom: 30px;
  }
`

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  font-weight: ${(props) => (props.isBold ? '600' : '400')};
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`

const ShopBtn = styled.button`
  color: var(--white);
  text-transform: uppercase;

  border-radius: 4px;
  padding: 12px;
  border: none;
  margin-top: 40px;

  width: 100%;

  background-color: var(--success-color);
  cursor: pointer;
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
  const deliveryFee = 4000
  const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item
      return { ...item, quantity }
    })

    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => item.id !== id)

    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length} produtos)
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal do produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>Finalizar compra</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}

export default CartPage
