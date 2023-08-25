import Button from '../button/button.component'
import FormInput from '../from-input/form-input.component'
import { SignInContainer,ButtonContainer } from './sign-in-form.styles';
import { useState} from 'react'
import {signInWithGooglePopup ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const onChangeHandler = (event) => { 
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value})
     }
    const signInWithGoogle = async () =>{
        try{
            await signInWithGooglePopup();
        }
        catch(error){
            if(error.code === "auth/popup-closed-by-user"){
                console.log(error,"auth/popup-closed-by-user"," in signInWithGoogle")
            }
        }

    }
    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            setFormFields(defaultFormFields);
        }
        catch(error){

        }
    }
    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput label='Email' type='email' name='email' value={email} onChange={onChangeHandler} required />
                <FormInput label='Password' type='password' name='password' value={password} onChange={onChangeHandler} required />
                <ButtonContainer>
                    <Button type='submit' buttonType='base'>Sign In</Button>
                    <Button type = 'button' buttonType='google' onClick = {signInWithGoogle}>Sign in with google</Button>
                </ButtonContainer>

            </form>
        </SignInContainer>
    )
}
export default SignInForm;