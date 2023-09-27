import React from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/textShadown')
    }
    const handleClickBox = () => {
        navigate('/')
    }
  return (
    <>
     <header>
        <div className="header-nav">
            <div className="menu-header ">
                <ul className="list-header">
                    <li>
                        <a className="menu-link" onClick={handleClickBox}>Box shadow</a>
                    </li>
                    <li>
                        <a className="menu-link" onClick={handleClick}>Text shadow</a>
                    </li>
                    <li>
                        <a className="menu-link">Border</a>
                    </li>
                    <li>
                        <a className="menu-link">Transform</a>
                    </li>
                    <li>
                        <a className="menu-link">Gradient</a>
                    </li>
                </ul>
            </div>
        </div>
     </header>
    </>
  );
}

export default NavBar;
