'use client'

import { BackButton, DefaultPageLayout } from '@/components'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>informações do produto</section>
      </Container>
    </DefaultPageLayout>
  )
}

export default Product
