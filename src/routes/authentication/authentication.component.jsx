import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

import './authentication.styles.scss'

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
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}