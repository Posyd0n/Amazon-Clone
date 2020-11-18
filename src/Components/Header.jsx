import React from 'react'
import '../Styling/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'


function Header() {
    // eslint-disable-next-line
    const [{basket, user}, dispatch] = useStateValue()

    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className="header">
            
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo" />
            </Link>
            
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div className="header_options" onClick={handleAuth} >
                        <span className="header_optionLineOne">
                            {user ? user?.email : 'Hello Guest'}
                        </span>
                        <span className="header_optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header_options">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header_options">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo header_basketCount"> {basket?.length} </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
