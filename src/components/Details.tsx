import React, { useState, useEffect } from "react";
import Song from "../typings/Types";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

// interface DetailsProps {
//   obj: Song;
// }

const initialSong = {
  id: 1089004332,
  title: "Wouldn't It Be Nice - InVersions",
  artist: {
    id: 14175163,
    name: "Fontaines D.C.",
  },
  album: {
    id: 175189762,
    title: "Wouldn't It Be Nice - InVersions",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/e8db0421c7dda55ebac932ef73af4943/250x250-000000-80-0-0.jpg",
  },
};

const Details = ({ location, history, match }: RouteComponentProps) => {
  const songId = match.params;
  // const songId = 1089004332;
  const [songObj, setSongObj] = useState<Song>(initialSong);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${songId}`
        );
        if (response.ok) {
          let fetchedSong = await response.json();
          let song: Song = fetchedSong;
          //   console.log(fetchedSongs);
          setSongObj(song);
          console.log(songObj);
        }
      } catch (error) {}
    };
    fetchSong();
  }, []);

  return (
    <div className="col text-center">
      {console.log(match.params)}
      <div>
        <img className="img-fluid" src={songObj.album.cover_medium} alt="1" />
      </div>
      <p>
        <span>Album:&nbsp;</span>
        <span>
          "
          {songObj.album.title.length < 16
            ? songObj.album.title
            : songObj.album.title.substring(0, 16) + "..."}
          "
        </span>
        <br />

        <span>Artist:&nbsp;</span>
        <span>{songObj.artist.name}</span>
      </p>
    </div>
  );
};

export default Details;
