import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"

export default function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwLogo className='logo' />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>
          ) : (
            <Link className="nav-link" to='auth'>
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </>
  )
}