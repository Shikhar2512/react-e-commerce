import './button.styles'
import { BaseButton,ButtonSpinner,GoogleSignInButton,InvertedButton } from './button.styles'
const BUTTON_TYPE_CLASS = {
    base : BaseButton,
    inverted: InvertedButton,
    google: GoogleSignInButton
}
const Button = ({ children, buttonType, isLoading,...otherProps }) => {
    const ButtonTypeHolder = BUTTON_TYPE_CLASS[buttonType];
    return (
        <ButtonTypeHolder disabled = {isLoading}  {...otherProps}>
            {isLoading?<ButtonSpinner/>:children}
        </ButtonTypeHolder>
    )
}
export default Button;