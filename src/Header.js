import React from "react";
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://www.rabbitmart.com/wp-content/uploads/elementor/thumbs/Asset-10-pbt0jiavo8y3y0m7qnt9e3yd60kthgffsxacekimmw.png"
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchOutlinedIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>



                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>



                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;