import Button from '../button/button.component'
import './cart-dropdown.styles.scss'


export default function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-item"></div>
            <Button buttonType='inverted'>GO TO CHECKOUT</Button>
        </div>
    )
}