import React from 'react';
import './NavBar.css';
// import logo from '../img/television.svg';
import reload from '../img/refresh.svg';

//███╗   ██╗ █████╗ ██╗   ██╗██████╗  █████╗ ██████╗ 
//████╗  ██║██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗
//██╔██╗ ██║███████║██║   ██║██████╔╝███████║██████╔╝
//██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗
//██║ ╚████║██║  ██║ ╚████╔╝ ██████╔╝██║  ██║██║  ██║
//╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
//                                                   

function NavBar(props) {
    return (
        <nav className="navBar">
                <div className="decorativeCircles">
                    <div className="buttonRed"></div>
                    <div className="buttonYellow"></div>
                    <div className="buttonGreen"></div>
                </div>
                <h1 className="navBarText">Random Anime Generator</h1>
            <div className="controlButtons">
                <div>
                    <img 
                        onClick={props.remount}
                        src={ reload } 
                        className="refreshButton" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;