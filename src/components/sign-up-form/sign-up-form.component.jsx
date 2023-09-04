import { useState } from "react";
import FormInput from "../from-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const resetFields = () =>{
        setFormFields(defaultFormFields);
    }
    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        if(displayName && email && password && confirmPassword){
            if(password !== confirmPassword){
                console.log("password didn't match")
            }
            dispatch(signUpStart(email,password,displayName));
            // try{
            //     const {user} = await createAuthUserWithEmailAndPassword(email,password);
            //     await createUserDocumentFromAuth(user,{displayName});
            resetFields();
            // }
            // catch(error){
            //     if(error.code === "auth/email-already-in-use"){
            //         console.log("user already exist");
            //     }
            // }
        }
    } 
    return (
        <SignUpContainer>
        <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput label='Display Name' onChange={onChangeHandler} name='displayName' type="text" value={displayName} required />
                <FormInput label='Email' onChange={onChangeHandler} name='email' type="email" value={email} required />
                <FormInput label='Password' onChange={onChangeHandler} name='password' type="password" value={password} required />
                <FormInput label = 'Confirm Password' onChange={onChangeHandler} name='confirmPassword' type="password" value={confirmPassword} required />
                <Button type="submit" buttonType='base'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}
export default SignUpForm;