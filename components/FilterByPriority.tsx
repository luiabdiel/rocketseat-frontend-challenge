'use client'

import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ArrowIcon } from '.'
import { useFilter } from '@/hooks/useFilter'
import { Priority } from '@/types/Priority'

const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  button {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    border: none;
    background: transparent;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  width: 176px;

  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  border-radius: 4px;
  padding: 12px 16px;

  list-style: none;

  top: 100%;

  li {
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`

const FilterByPriority = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen((prev) => !prev)

  const handleUpdatePriority = (value: Priority) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(Priority.NEWS)}>Novidade</li>
          <li onClick={() => handleUpdatePriority(Priority.BIGGEST_PRICE)}>
            Preço: Maior - Menor
          </li>
          <li onClick={() => handleUpdatePriority(Priority.MINOR_PRICE)}>
            Preço: Menor - Maior
          </li>
          <li onClick={() => handleUpdatePriority(Priority.POPULARITY)}>
            Mais Vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}

export default FilterByPriority
