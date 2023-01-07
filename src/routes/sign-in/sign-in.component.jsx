import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log('response', response)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}