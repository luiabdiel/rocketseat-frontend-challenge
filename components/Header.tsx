'use client'

import React from 'react'
import { styled } from 'styled-components'
import { Saira_Stencil_One as sairaStencilOne } from 'next/font/google'
import { CartControl, PrimaryInputWithSearchIcon } from '.'

const sairaStencil = sairaStencilOne({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 160px;
`

const Logo = styled.a`
  color: var(--logo-color);
`

const Header = () => {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  )
}

export default Header
