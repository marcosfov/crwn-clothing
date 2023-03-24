import { CartItemContainer, ImgCartItem, ItemDetails, Name } from './cart-item.styles.jsx'

export default function CartItem({ cartItem }) {
    const { name, quantity, imageUrl, price } = cartItem

    return (
        <CartItemContainer>
            <ImgCartItem src={imageUrl} alt={`${name}`} />

            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

