import { Outlet } from 'react-router-dom'
import { ReactComponent as BehanceLogo } from '../../asset/behance.svg';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { LogoContainer, NavLinks, NavigationContainer,NavLink } from './navigation.styles';
import { selectShowCartDropddown } from '../../store/cart/cart.selector';
const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser); // getting data from redux store ...... 
    const showCartDropdown = useSelector(selectShowCartDropddown)
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <BehanceLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {(currentUser?<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    :
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {showCartDropdown && <CartDropdown/>}
                
                
                
            </NavigationContainer>
            <Outlet />
        </>
    )

}
export default Navigation;