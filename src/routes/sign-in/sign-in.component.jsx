import './sign-in.styles.scss';
import {signInWithGooglePopup ,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <>
        <button onClick={logGoogleUser}>Sign In</button>
        <SignUpForm/>
        </>
    )
} 
export default SignIn;