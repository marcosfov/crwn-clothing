import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { Arrow, CheckoutItemContainer, ImageContainer, ImageItem, NameCheckoutItem, PriceCheckoutItem, QuantityCheckoutItem, RemoveButton, Value } from './checkout-item.styles.jsx'

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ImageItem src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <NameCheckoutItem>{name}</NameCheckoutItem>
      <QuantityCheckoutItem>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantityCheckoutItem>
      <PriceCheckoutItem>{price}</PriceCheckoutItem>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}