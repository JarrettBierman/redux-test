import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { newPost, deletePost, deleteAll } from "../store/actions";
import { v4 as uuidv4 } from "uuid";

function ArtistInput() {
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(artist.length > 0 && album.length > 0) {
            dispatch(newPost({id: uuidv4(), artist, album, rating}));
            //clear stuff
            setArtist("");
            document.getElementById("artist").value = "";
            setAlbum("");
            document.getElementById("album").value = "";
        }

    }

    return(
        <div className="col-lg-8">
          <div className="form-group">
            <label for="artist">Artist</label>
            <input type="text" id="artist" className="form-control" placeholder="Artist" onChange={(e) => setArtist(e.target.value)}/>
          </div>
          
          <div className="form-group">
            <label for="album">Album</label>
            <input type="text" id="album" className="form-control" placeholder="Album" onChange={(e) => setAlbum(e.target.value)}/>
          </div>

          <div className="form-group">
        <label for="rating">Rating: {rating}</label>
            <input type="range" id="rating" min="0" max="10" step="0.1" className="form-control-range" onChange={(e) => setRating(e.target.value)}/>
          </div>

          <button className="btn btn-primary mx-2" onClick={handleSubmit}>Add Artist Rating</button>
          <button className="btn btn-warning mx-2" onClick={() =>{dispatch(deletePost())}}>Remove Last Rating</button>
          <button className="btn btn-danger mx-2" onClick={() =>{dispatch(deleteAll())}}>Remove All</button>
        </div>
    )
}
export default ArtistInput;