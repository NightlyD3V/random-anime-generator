import React from 'react';
import './AnimeCards.css';
import Loader from 'react-loader-spinner';

//  █████╗ ███╗   ██╗██╗███╗   ███╗███████╗     ██████╗ █████╗ ██████╗ ██████╗ ███████╗
// ██╔══██╗████╗  ██║██║████╗ ████║██╔════╝    ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝
// ███████║██╔██╗ ██║██║██╔████╔██║█████╗      ██║     ███████║██████╔╝██║  ██║███████╗
// ██╔══██║██║╚██╗██║██║██║╚██╔╝██║██╔══╝      ██║     ██╔══██║██╔══██╗██║  ██║╚════██║
// ██║  ██║██║ ╚████║██║██║ ╚═╝ ██║███████╗    ╚██████╗██║  ██║██║  ██║██████╔╝███████║
// ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝
//                                                                                     
const AnimeCards = props => {
    //console.log(props.number);
    //console.log(props.anime);
    //Conditional render of loader
    let image = document.createElement('img');
    image.innerHTML= props.createdImages[0];

    if (props.anime[1] === undefined) {
        return (
            <div>
                <h1>Loading...</h1>
                <Loader type="ThreeDots" color="lightGreen" height={80} width={80} />
            </div>
        )
    } else  if (image.childNodes[1] === undefined)  {
        return (
            <div className="masterContainer">
                <div className="container">
                    <div>
                        <div className="cardContainer">
                            <p>No#{props.number}</p>
                            <h1 className="animeText">{`${props.anime[0]}`}</h1>
                        </div>
                        <div>
                            <img className="animeImage" src={image.childNodes[0].src} />
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[1]}`}</h1>
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[2]}`}</h1>
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[3]}`}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
    return ( 
            <div className="masterContainer">
                <div className="container">
                    <div>
                        <div className="cardContainer">
                            <p>No#{props.number}</p>
                            <h1 className="animeText">{`${props.anime[0]}`}</h1>
                        </div>
                        <div>
                            <img className="animeImage" src={image.childNodes[1].src} />
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[1]}`}</h1>
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[2]}`}</h1>
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[3]}`}</h1>
                        </div>
                        <div className="cardContainer">
                            <h1 className="animeText">{`${props.anime[4]}`}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimeCards;