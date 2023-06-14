import './sign-in.styles.scss';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
    }
    return(
        <button onClick={logGoogleUser}>Sign In</button>
    )
} 
export default SignIn;