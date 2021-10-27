import React from "react";
import { Row } from "react-bootstrap";
import Song from "../typings/Types";
import AlbumCard from "./AlbumCard";

interface DisplayResultsProps {
  resultsArray: Song[];
}

const DisplayResults = ({ resultsArray }: DisplayResultsProps) => {
  return (
    <Row>
      {resultsArray.map((obj) => (
        <AlbumCard obj={obj} />
      ))}
    </Row>
  );
};

export default DisplayResults;
