import React, { useState } from 'react'
import '../css/Header.css';
import logo from "../images/logo.png";
import { BsBasket } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Header() {

    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme)
    }

    return (
        <div className='header'>
            <div onClick={() => navigate("/")}>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='flex-row'>
                <CiSearch />
                <input className='search-input' type='text' placeholder='Mağazada Ara...' />
                <div>
                    <BsBasket className='icon' />
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <MdLightMode className='icon' onClick={changeTheme} />}
                    {/* <FaMoon className='icon' /> */}
                </div>
            </div>
        </div>
    )
}

export default Header
