import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Container,
  InputGroup,
  // DropdownButton,
  // Dropdown,
  FormControl,
} from "react-bootstrap";
import DisplayResults from "./DisplayResults";
import Song from "../typings/Types";
// import DisplayResults from "./DisplayResults";

const Main = () => {
  const [resultsArray, setResultsArray] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
        );
        if (response.ok) {
          let fetchedSongs = await response.json();
          let songs: Song[] = fetchedSongs.data;
          //   console.log(fetchedSongs);
          setResultsArray(songs);
          console.log(resultsArray);
        }
      } catch (error) {}
    };
    fetchSongs();
  }, [searchQuery]);

  return (
    <div>
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Search Music"
            value={searchQuery}
            onChange={handleInput}
          />
        </InputGroup>
        <DisplayResults resultsArray={resultsArray} />
      </Container>
    </div>
  );
};

export default Main;
