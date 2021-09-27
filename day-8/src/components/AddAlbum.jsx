import {useState,useRef } from "react";
import Album from "./Album"
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';





export default function AddAlbum(props) {
 

   const fileInputRef = useRef();
  const { data, setAlbums } = props;
  const [artist, setArtist] = useState("");
  const [albumeName, setAlbumName] = useState("");
  const [albumCover, setAlbumCover] = useState("");

  const onSelectFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 0) {
        setAlbumCover(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setAlbums([
      ...data,

      {
        id: new Date().getTime().toString(),
        artist: artist,
        album_title: albumeName,
        album_cover: albumCover,
      },
    ]);
    setArtist("");
    setAlbumName("");
    setAlbumCover("");
  };

  
   


 
  return (
    
     <>
      <div>
        <form onSubmit={(e) => {
          onsubmit(e);
        }} >
        <h1 style={{color:'white',marginRight:200}}>Add Albums</h1>
        <label style={{color:'white',marginRight:200}}>Album Title </label>
        <input
          type="text"
          value={albumeName}
          onChange={(e) => {
            setAlbumName(e.target.value);
          }}
          required
        ></input>
        <br />
        <br />
        <label style={{color:'white',marginRight:200}}>Atrist Name </label>
        <input
          type="text"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
          required
        ></input>
           <input
           margin="normal"
         type="file"  ref={fileInputRef}
          onChange={(e) => {
            onSelectFile(e);
          }}
          required />
          <br />
        {albumCover && <img src={albumCover} alt="image1" style={{height:200,width:200}} />}

        <br />
        <br />
        <button>Submit</button>
          </form>
          </div>
       <div >
    <br/><br/>
    
     <br/>
     
    </div>
   </>
  );
}

