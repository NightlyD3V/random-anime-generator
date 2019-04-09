import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AnimeCards from './components/AnimeCards';
import Footer from './components/Footer';

// █████╗ ██╗  ██╗██╗ ██████╗ ███████╗
//██╔══██╗╚██╗██╔╝██║██╔═══██╗██╔════╝
//███████║ ╚███╔╝ ██║██║   ██║███████╗
//██╔══██║ ██╔██╗ ██║██║   ██║╚════██║
//██║  ██║██╔╝ ██╗██║╚██████╔╝███████║ imported
//╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝
//         

import axios from 'axios';

//Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let randomNumber = getRandomInt(7000);                       

class App extends Component {
  constructor() {
    super();
    this.state={
      anime: [],
      pictures: [],
      id: randomNumber,
    }
  }

  //Request and Parse XML from animenewsnetwork
  componentDidMount() {
    console.log('DidMount');
    console.log(this.state.id);
      axios.get(`https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${this.state.id}`)
        .then((res) => {
          let parser = new DOMParser(); //CREATE NEW DOMPARSER OBJECT
          let xmlDOM = parser.parseFromString(res.data, 'text/html'); //PARSE XML DATA
          let info = xmlDOM.querySelectorAll('info'); //GET NODELIST
          let infoArray = Array.from(info); //MAKE NEW ARRAY
          // console.log(info); 
          //Map infoArray
          infoArray.map((info) => {
            this.setState(prevState => ({
              anime: [info.innerHTML, ...prevState.anime],
            }))
          })  
          console.log('pushed array');
          //No Data 
          if (this.state.anime.length === 0) {
            setTimeout(() => {
              window.location.reload();
            },3000)
          }
        })
        .catch((err) => {
          alert('something is wrong because of an error:' , err);
          console.log(err);
        })
    }

  //Find images
  findImages = () => {
    this.state.anime.map( images => {
        if (images.includes('src=\"https://cdn.animenewsnetwork')) {
          let newImage = images;
          this.state.pictures.push(newImage);
        }
    })
  }
  
  //Reload page
  remount = () => {
    document.getElementsByClassName('refreshButton').className = 'reloadAnimation';
    window.location.reload();
  }

  //Increment id forward
  moveForward = () => {
    axios.get(`https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${this.state.id}`)
        .then((res) => {
          let parser = new DOMParser(); //CREATE NEW DOMPARSER OBJECT
          let xmlDOM = parser.parseFromString(res.data, 'application/xml'); //PARSE XML DATA
          let info = xmlDOM.querySelectorAll('info'); //GET NODELIST
          let infoArray = Array.from(info); //MAKE NEW ARRAY
          // console.log(info); 
            infoArray.map((info) => {
              this.setState(prevState => ({
                anime: [info.innerHTML, ...prevState.anime]
              }))
            })
        })
        .catch((err) => {
          alert('something is wrong because of an error:' , err);
          console.log(err);
        })
    console.log('clicked');
    this.setState((prevState) => ({
      id: prevState.id +1
    }))
  }

  //Increment id backward
  moveBackward = () => {
    axios.get(`https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${this.state.id}`)
        .then((res) => {
          let parser = new DOMParser(); //CREATE NEW DOMPARSER OBJECT
          let xmlDOM = parser.parseFromString(res.data, 'application/xml'); //PARSE XML DATA
          let info = xmlDOM.querySelectorAll('info'); //GET NODELIST
          let infoArray = Array.from(info); //MAKE NEW ARRAY
          // console.log(info); 
            infoArray.map((info) => {
              this.setState(prevState => ({
                anime: [info.innerHTML, ...prevState.anime]
              }))
            })
        })
        .catch((err) => {
          alert('something is wrong because of an error');
          console.log(err);
        })
    console.log('clicked');
    if(this.state.id === 0 ) {
      alert('End of the list');
      return null;
    }
    this.setState((prevState) => ({
      id: prevState.id -1
    }))
  }


  render() {
    //console.log(this.state.id);
    //console.log(this.state.anime);
    //console.log(this.findImages());
    console.log(this.state.pictures);
    this.findImages();
    return (
      <div className="App">
        <NavBar 
          moveForward={this.moveForward} 
          moveBackward={this.moveBackward} 
          remount={this.remount}
        />
        <AnimeCards 
          anime={this.state.anime} 
          number={this.state.id} 
          findImages={this.findImages}
          createdImages={this.state.pictures}
        />   
        <Footer 
          moveBackward={this.moveBackward}
        />                                                                                                                       
      </div>
    );
  }
}

export default App;
