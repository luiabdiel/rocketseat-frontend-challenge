export function formatPrice(priceInCents: number) {
  const formattedPrice = priceInCents / 100

  return formattedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
