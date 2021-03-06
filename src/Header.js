import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const userAuthentication = () =>{
        if(user) 
            auth.signOut();
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                {/* searchicon */}
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_options">
                <Link to={!user && "/login"}>
                    <div onClick={userAuthentication} className="header_option">
                        <span className="header_optionLineOne">Hello {user?user.email:'guest'}</span>
                        <span className="header_optionLineTwo">{user?'Signout':'Signin'}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon className="header_basket" />
                        <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
