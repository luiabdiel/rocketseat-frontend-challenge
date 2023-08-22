'use client'

import React from 'react'
import { CartIcon } from '.'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: var(--white);

  margin-left: -10px;
`

const Container = styled.button`
  position: relative;

  border: none;
  background: transparent;

  cursor: pointer;
`

const CartControl = () => {
  const router = useRouter()
  const { value } = useLocalStorage('cart-items', [])

  const handleNavigateToCart = () => {
    router.push('/cart')
  }

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}

export default CartControl
