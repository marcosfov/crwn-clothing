import { async } from "q"
import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) alert('Passwords does not match!')

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            console.log(user)

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use")
            } else {
                console.log('User creation encountered an error', error)
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput required onChange={handleChange} label='Display Name' type="text" name='displayName' value={displayName} />

                <FormInput required onChange={handleChange} label='Email' type="email" name='email' value={email} />

                <FormInput required onChange={handleChange} label='Password' type="password" name='password' value={password} />

                <FormInput required onChange={handleChange} label='Confirm Password' type="password" name='confirmPassword' value={confirmPassword} />

                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}