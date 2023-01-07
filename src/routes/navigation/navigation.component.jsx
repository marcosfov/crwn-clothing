import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

export default function Navigation() {
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
          <Link className="nav-link" to='sign-in'>
            SIGN IN
          </Link>

        </div>
      </div>
      <Outlet />
    </>
  )
}