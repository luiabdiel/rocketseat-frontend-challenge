'use client'

import React, { InputHTMLAttributes } from 'react'
import { styled } from 'styled-components'
import { SearchIcon } from '.'

const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);

  background: var(--bg-secondary);
`

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`
type InputProps = InputHTMLAttributes<HTMLInputElement>

const PrimaryInputWithSearchIcon = (props: InputProps) => {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  )
}

export default PrimaryInputWithSearchIcon
