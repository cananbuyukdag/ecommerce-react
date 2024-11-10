import React, { useState } from 'react'
import '../css/Header.css';
import logo from "../images/logo.png";
import { BsBasket } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.basket)
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
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <MdLightMode className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error" className='badge'>
                        <BsBasket className='icon-basket' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header
