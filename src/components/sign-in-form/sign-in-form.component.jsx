import { useState } from "react"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import { ButtonsContainer, SignUpContainer } from './sign-in-form.styles.jsx'

const defaultFormFields = {
    email: '',
    password: '',
}

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)

            // setCurrentUser(user)
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
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput required onChange={handleChange} label='Email' type="email" name='email' value={email} />

                <FormInput required onChange={handleChange} label='Password' type="password" name='password' value={password} />

                <ButtonsContainer>
                    <Button type="submit" >Sign In</Button>
                    <Button
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}