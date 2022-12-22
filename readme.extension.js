import React from "react";
import "./style.css";
import godash from 'godash';
import {Goban} from 'react-go-board';

function handleCoordinateClick(coordinate) {
    // http://duckpunch.github.io/godash/documentation/#coordinate
    coordinate;
}

export default function RenderMe() {
    const board = godash.placeStone(new godash.Board(19), new godash.Coordinate(15,4), godash.BLACK);
    const annotations = [new godash.Coordinate(2, 2)];
    const goban = <Goban
        board={board}
        boardColor='#efefef'
        annotations={annotations}
        onCoordinateClick={handleCoordinateClick}
        options={}
        />;


    return goban
}

export default function App() {
  const goban = RenderMe();
  return (
    <div>
      {goban}
    </div>
  );
}
