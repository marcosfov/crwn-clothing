import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from '../../utils/firebase/firebase.utils'

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandle = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
            <span className="nav-link" onClick={signOutHandle}> SIGN OUT</span>
          ) : (
            <Link className="nav-link" to='auth'>
              SIGN IN
            </Link>

          )}

        </div>
      </div>
      <Outlet />
    </>
  )
}