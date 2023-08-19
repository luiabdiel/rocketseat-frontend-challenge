'use client'

import { styled } from 'styled-components'

const DefaultPageLayout = styled.div`
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${(props) => props.theme.destokBreackpoint}) {
    padding: 34px 160px;
  }
`

export default DefaultPageLayout
