import { createContext, useEffect, useState, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser: null
}

function userReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }

}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null)
  // const value = { currentUser, setCurrentUser }
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    )
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}