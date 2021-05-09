import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Headermain from '../HeaderMain/Headermain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className = "header-container">
            <Navbar></Navbar>
            <Headermain></Headermain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;