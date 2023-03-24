import { FooterCard, ImageCard, NameCard, PriceCard, ProdutcCardContainer } from './product-card.styles.jsx'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProdutcCardContainer>
      <ImageCard src={imageUrl} alt={`${name}`} />

      <FooterCard>
        <NameCard>{name}</NameCard>
        <PriceCard>{price}</PriceCard>
      </FooterCard>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProdutcCardContainer>
  )
}
