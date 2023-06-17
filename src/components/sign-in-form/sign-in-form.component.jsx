import Button from '../button/button.component'
import FormInput from '../from-input/form-input.component'
import './sign-in-form.styles.scss'
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
            // const {user} = await signInWithGooglePopup(); 
            // await createUserDocumentFromAuth(user);  as we are centerlizing with onChangeAuth we Should shift this to contexts
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
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput label='Email' type='email' name='email' value={email} onChange={onChangeHandler} required />
                <FormInput label='Password' type='password' name='password' value={password} onChange={onChangeHandler} required />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type = 'button' buttonType='google' onClick = {signInWithGoogle}>Sign in with google</Button>
                </div>

            </form>
        </div>
    )
}
export default SignInForm;