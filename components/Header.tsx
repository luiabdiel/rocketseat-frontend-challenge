'use client'

import React from 'react'
import { styled } from 'styled-components'
import { Saira_Stencil_One as sairaStencilOne } from 'next/font/google'
import { CartControl, PrimaryInputWithSearchIcon } from '.'
import { useFilter } from '@/hooks/useFilter'
import { useRouter } from 'next/navigation'

const sairaStencil = sairaStencilOne({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.destokBreackpoint}) {
    padding: 20px 160px;
  }

  button {
    border: none;
    background: transparent;

    cursor: pointer;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  @media (min-width: ${(props) => props.theme.tableBreackpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.destokBreackpoint}) {
    font-size: 40px;
  }
`

const Header = () => {
  const { search, setSearch } = useFilter()

  const router = useRouter()

  const handleNavigate = () => {
    router.push('/')
  }

  return (
    <TagHeader>
      <button onClick={handleNavigate}>
        <Logo className={sairaStencil.className}>Capputeeno</Logo>
      </button>
      <div>
        <PrimaryInputWithSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}

export default Header
