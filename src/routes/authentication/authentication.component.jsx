import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

import { AuthenticationContainer } from './authentication.styles.jsx'

export default function Authentication() {

    //exemplo utilizando o redirect do google
    // useEffect(() => {
    //     getResponse()
    // }, [])

    // const getResponse = async () => {
    //     const response = await getRedirectResult(auth)

    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }

    return (
        <AuthenticationContainer>
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}