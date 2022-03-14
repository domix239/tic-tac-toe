import React, { useEffect, useState } from "react";
import { Board } from "../Board/board";
import "../../index.css";
import { calculateWinner } from "../Board/helper";

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    const _squares = [...squares];
    if (winner || _squares[i]) return;
    _squares[i] = isX ? "X" : "O";
    setSquares(_squares);
    setIsX(!isX);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>
          {winner
            ? "Winner: " + winner
            : !squares.includes(null)
            ? "Its a draw!"
            : "Next player: " + (isX ? "X" : "O")}
        </div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
