'use client'

import React from 'react'
import { FilterByType } from '.'
import { styled } from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  )
}

export default FilterBar
