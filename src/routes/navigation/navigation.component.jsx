import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as BehanceLogo } from '../../asset/behance.svg';
import { useContext } from 'react';
import { UserContext } from '../../components/contexts/user.context';
import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { cartContext } from '../../components/contexts/cart.context';
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {showCartDropdown} = useContext(cartContext)
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div><BehanceLogo /></div>
                </Link>
                <div className='nav-links-container' to='/shop'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {(currentUser?<><span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    <CartIcon className = 'nav-link'/>
                    </>
                    :
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    )}
                </div>
                {showCartDropdown&&<CartDropdown/>}
                
                
                
            </div>
            <Outlet />
        </>
    )

}
export default Navigation;