import { Outlet } from 'react-router-dom'
import { ReactComponent as BehanceLogo } from '../../asset/behance.svg';
import { useContext } from 'react';
import { UserContext } from '../../components/contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { cartContext } from '../../components/contexts/cart.context';
import { LogoContainer, NavLinks, NavigationContainer,NavLink } from './navigation.styles';
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {showCartDropdown} = useContext(cartContext)
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
                    {(currentUser?<><NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    <CartIcon />
                    </>
                    :
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                    )}
                </NavLinks>
                {showCartDropdown&&<CartDropdown/>}
                
                
                
            </NavigationContainer>
            <Outlet />
        </>
    )

}
export default Navigation;