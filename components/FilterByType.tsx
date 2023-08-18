'use client'

import { useFilter } from '@/hooks/useFilter'
import { FilterType } from '@/types/Filter'
import React from 'react'
import { styled } from 'styled-components'

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);

  cursor: pointer;

  border-bottom: ${({ selected }) =>
    selected ? '4px solid var(--orange-low)' : ''};

  @media (min-width: ${(props) => props.theme.destokBreackpoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`

const FilterByType = () => {
  const { type, setType } = useFilter()

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}

export default FilterByType
