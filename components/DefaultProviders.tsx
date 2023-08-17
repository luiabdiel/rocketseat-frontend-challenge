'use client'

import { FilterContextProvider } from '@/contexts/FilterContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface DefaultProvidersProps {
  children: ReactNode
}

const theme = {
  destokBreackpoint: '768px',
}

const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default DefaultProviders
