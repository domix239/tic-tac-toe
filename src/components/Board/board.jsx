import React, { useEffect } from "react";
import { useState } from "react";
import { Square } from "../Square/square";
import "../../index.css";
import { calculateWinner } from "./helper";

export const Board = (props) => {
 /* const [status, setStatus] = useState("Next player: X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
*/

  const {squares, onClick} = props

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };
/*
  const handleClick = (i) => {
    const sqrs = squares.slice();

    if(calculateWinner(sqrs) || sqrs[i])
      return

    sqrs[i] = isX ? "X" : "O";
    setSquares(sqrs);
    setIsX(!isX);
    setStatus("Next player: " + (isX ? "X" : "O"));
  };

  useEffect(() => {
    const winner = calculateWinner(squares)
    
    if(winner)
      setStatus(`Winner: ${winner}`)
    else
      setStatus(`Next player: ${isX ? 'X':'O'}`)

  }, [isX]);
*/
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
