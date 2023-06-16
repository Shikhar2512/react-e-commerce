import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as BehanceLogo } from '../../asset/behance.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div><BehanceLogo /></div>
                </Link>
                <div className='nav-links-container' to='/shop'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        Sign In / Sign Up
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )

}
export default Navigation;