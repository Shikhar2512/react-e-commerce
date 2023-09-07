import { Outlet } from 'react-router-dom'
import { ReactComponent as BehanceLogo } from '../../asset/behance.svg';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCurrentUser } from '../../store/user/user.selector';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { LogoContainer, NavLinks, NavigationContainer,NavLink } from './navigation.styles';
import { selectIsCartOpen} from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.reducer';
const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser); // getting data from redux store ...... 
    const isCartOpen = useSelector(selectIsCartOpen);
    const signOutHandler = () => dispatch(signOutStart());
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
                    {(currentUser?<NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
                    :
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
                
                
                
            </NavigationContainer>
            <Outlet />
        </>
    )

}
export default Navigation;