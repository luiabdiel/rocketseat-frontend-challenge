import React from 'react'
import { CartIcon } from '.'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { styled } from 'styled-components'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  left: 1263px;
  top: 43px;

  background-color: var(--delete-color);
  color: #fff;

  position: absolute;
  right: -10px;
  top: 50%;
`

const Container = styled.div`
  position: relative;
`

const CartControl = () => {
  const { value } = useLocalStorage<string[]>('cart-items') // Assuming 'value' is an array of strings

  const cartItemCount = value ? value.length : 0

  return (
    <Container>
      <CartIcon />
      {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
    </Container>
  )
}

export default CartControl
