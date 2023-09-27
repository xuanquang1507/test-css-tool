import React from "react";
import './navbar.css'
function NavBar() {
  return (
    <>
     <header>
        <div className="header-nav" >
            <div className="menu-header ">
                <ul className="list-header">
                    <li >
                        <a className="menu-link">Box shadow</a>
                    </li>
                    <li>
                        <a className="menu-link">Text shadow</a>
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
