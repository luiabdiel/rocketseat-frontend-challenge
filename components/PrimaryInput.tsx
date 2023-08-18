'use client'

import React, { InputHTMLAttributes } from 'react'
import { styled } from 'styled-components'
import { SearchIcon } from '.'

const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);

  background: var(--bg-secondary);

  @media (min-width: ${(props) => props.theme.destokBreackpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.destokBreackpoint}) {
    width: 352px;
  }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

const PrimaryInputWithSearchIcon = (props: InputProps) => {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(e) => props.handleChange(e.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  )
}

export default PrimaryInputWithSearchIcon
