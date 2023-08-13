'use client'

import React from 'react'
import { FilterByPriority, FilterByType } from '.'
import { styled } from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
`

const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}

export default FilterBar
