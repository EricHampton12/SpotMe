import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from "@material-ui/core/IconButton";


function Header() {
    return (
        <div className="header ml-3 mr-3">
            <IconButton>

                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img className="header__logo" src="GYMICON.png" alt="barbell"></img>
            <IconButton>
                <MessageIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}
export default Header;
