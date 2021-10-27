import React from "react";
import Song from "../typings/Types";
// import { Link } from "react-router-dom";

interface AlbumCardProps {
  obj: Song;
}

const AlbumCard = ({ obj }: AlbumCardProps) => {
  return (
    <div className="col text-center">
      {/* <div className="col text-center" id={obj.id}> */}
      {/* <Link to={"/album/" + obj.album.id}> */}
      <div>
        <img className="img-fluid" src={obj.album.cover_medium} alt="1" />
      </div>
      {/* </Link> */}
      <p>
        {/* <Link to={"/album/" + obj.album.id}> */}
        <span>Album:&nbsp;</span>
        <span>
          "
          {obj.album.title.length < 16
            ? obj.album.title
            : obj.album.title.substring(0, 16) + "..."}
          "
        </span>
        <br />
        {/* </Link> */}
        {/* <Link to={"/artist/" + obj.artist.id}> */}
        <span>Artist:&nbsp;</span>
        <span>{obj.artist.name}</span>
        {/* </Link> */}
      </p>
    </div>
  );
};

export default AlbumCard;
