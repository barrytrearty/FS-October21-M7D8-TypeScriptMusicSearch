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
      {/* {resultsArray === void
        ? ""
        : resultsArray.map((obj) => <AlbumCard obj={obj} />)} */}
      {resultsArray.map((obj) => (
        <AlbumCard obj={obj} />
      ))}
      {/* {console.log(resultsArray)} */}
    </Row>
  );
};

export default DisplayResults;
