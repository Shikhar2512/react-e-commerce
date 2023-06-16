import './button.styles.scss'
const BUTTON_TYPE_CLASS = {
    inverted: 'inverted',
    google: 'google-sign-in'
}
const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`${BUTTON_TYPE_CLASS[buttonType]} button-container`} {...otherProps}>
            {children}
        </button>
    )
}
export default Button;