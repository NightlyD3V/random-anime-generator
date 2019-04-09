import React from 'react';
import './Footer.css';
import git from '../img/github.svg'
import { AST_PropAccess } from 'terser';

//███████╗ ██████╗  ██████╗ ████████╗███████╗██████╗ 
//██╔════╝██╔═══██╗██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗
//█████╗  ██║   ██║██║   ██║   ██║   █████╗  ██████╔╝
//██╔══╝  ██║   ██║██║   ██║   ██║   ██╔══╝  ██╔══██╗
//██║     ╚██████╔╝╚██████╔╝   ██║   ███████╗██║  ██║
//╚═╝      ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝
//                                                   

function Footer(props) {
    return (
        <footer>
            <img className="git" src={git} />
            {/* <button onClick={props.moveBackward}>BACK</button>
            <button>NEXT</button> */}
            <a className="attribution" href="https://www.animenewsnetwork.com/encyclopedia/api.php">"full details at Anime News Network"</a>
        </footer>
    )
}

export default Footer;