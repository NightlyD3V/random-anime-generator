import React from 'react';
import './AudioBar.css'

// █████╗ ██╗   ██╗██████╗ ██╗ ██████╗     ██████╗  █████╗ ██████╗ 
//██╔══██╗██║   ██║██╔══██╗██║██╔═══██╗    ██╔══██╗██╔══██╗██╔══██╗
//███████║██║   ██║██║  ██║██║██║   ██║    ██████╔╝███████║██████╔╝
//██╔══██║██║   ██║██║  ██║██║██║   ██║    ██╔══██╗██╔══██║██╔══██╗
//██║  ██║╚██████╔╝██████╔╝██║╚██████╔╝    ██████╔╝██║  ██║██║  ██║
//╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
//                                                                 
const AudioBar = (props) => {
    return (
        <div>
            <audio controls className="audioBar">
            <source src="horse.ogg" type="audio/ogg"></source>
            <source src="horse.mp3" type="audio/mpeg"></source>
            Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default AudioBar;