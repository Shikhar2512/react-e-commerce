import './button.styles'
import { BaseButton,GoogleSignInButton,InvertedButton } from './button.styles'
const BUTTON_TYPE_CLASS = {
    base : BaseButton,
    inverted: InvertedButton,
    google: GoogleSignInButton
}
const Button = ({ children, buttonType, ...otherProps }) => {
    const ButtonTypeHolder = BUTTON_TYPE_CLASS[buttonType];
    console.log(ButtonTypeHolder);
    return (
        <ButtonTypeHolder {...otherProps}>
            {children}
        </ButtonTypeHolder>
    )
}
export default Button;