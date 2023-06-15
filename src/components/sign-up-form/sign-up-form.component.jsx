import { signInAnonymously } from "firebase/auth";
import { useState } from "react";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => { }}>
                <label>Display Name</label>
                <input onChange={onChangeHandler} name='displayName' type="text" value={displayName} required />
                <label>Email</label>
                <input onChange={onChangeHandler} name='email' type="email" value={email} required />
                <label>Password</label>
                <input onChange={onChangeHandler} name='password' type="password" value={password} required />
                <label>Confirm Password</label>
                <input onChange={onChangeHandler} name='confirmPassword' type="password" value={confirmPassword} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm;