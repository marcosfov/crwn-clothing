import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwLogo } from '../../assets/crown.svg'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'

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
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}> SIGN OUT</NavLink>
          ) : (
            <NavLink to='auth'>
              SIGN IN
            </NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  )
}