import { useState, useContext } from "react"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"

import { UserContext } from "../../contexts/user.context"

import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)

            setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput required onChange={handleChange} label='Email' type="email" name='email' value={email} />

                <FormInput required onChange={handleChange} label='Password' type="password" name='password' value={password} />

                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button
                        type='button'
                        buttonType={'google'}
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}