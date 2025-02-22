
import { useState } from "react"
import PropTypes from 'prop-types'
import { assets } from "../assets/assets"
import "./Navbar.css"
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");

    return (
        <div className="app">
            <div className="navbar">
                <img src={assets.logo} alt="" className="logo" />
                <ul className="navbar-menu">
                    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                    <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                    <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-Us</li>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-search-icon">
                        <img src={assets.basket_icon} alt="" />
                        <div className="dot"></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>sign in</button>
                </div>
            </div>
        </div>    
            )
}

Navbar.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
};

            export default Navbar
