import React, { useState, useEffect } from "react";
import {BrowserRouter,Route,Switch } from "react-router-dom"
import "./App.css";
import Albums from "./components/Albums";
 import AddAlbum from './components/AddAlbum'
 import Navbar from './components/Navigation'

function App() {
  
  const [albums, setAlbums] = useState([
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 2,
      artist: "Jubin Nautial",
      album_title: "JukeBox",
      album_cover:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
      songs: ["Meri Aashiqui", "Humnava", "Akh lad jaave"],
    },
    {
      id: 3,
      artist: "Arijit Singh",
      album_title: "Love song",
      album_cover:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      songs: ["Humdard", "DekhLena", "Naina"],
    },
    {
      id: 4,
      artist: "Atif Aslam",
      album_title: "Hits Of Atif",
      album_cover:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      songs: ["Be inteha", "Doorie", "ku6 is tarah"],
    },
    {
      id: 5,
      artist: "Atif Aslam",
      album_title: "Hits Of Atif",
      album_cover:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      songs: ["Be inteha", "Doorie", "ku6 is tarah"],
    },
    {
      id: 6,
      artist: "Arijit Singh",
      album_title: "Love song",
      album_cover:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      songs: ["Humdard", "DekhLena", "Naina"],
    },
    {
      id: 7,
      artist: "Jubin Nautial",
      album_title: "JukeBox",
      album_cover:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
      songs: ["Meri Aashiqui", "Humnava", "Akh lad jaave"],
    },
    {
      id: 8,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
  ]);



useEffect(() => {
    setAlbums(albums);
  }, [albums]);



  return (
    <div className="App">
   
    <BrowserRouter>
        <Navbar />
   
       <Route exact path="/albums">  <Albums data={albums}  setAlbums={setAlbums} /></Route>
       <Route path="/addalbums"> <AddAlbum  setAlbums={setAlbums} data={albums} /></Route>
      
</BrowserRouter>
    </div>
  );
}

export default App;