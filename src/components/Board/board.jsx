import React, { useEffect } from "react";
import { useState } from "react";
import { Square } from "../Square/square";
import "../../index.css";

export const Board = (props) => {
  const { squares, onClick } = props;
  const col = 3;
  const row = 3;

  const renderSquare = (val, idx) => {
    return (
      <Square key={"square_" + idx} value={val} onClick={() => onClick(idx)} />
    );
  };

  return (
    <div>
      {[...Array(row)].map((_, ri) => {
        return (
          <div key={"row_" + ri} className="board-row">
            {[...Array(col)].map((_, ci) => {
              let idx = (ri === 1 ? ri + 2 : ri === 2 ? ri + 4 : ri) + ci;
              return renderSquare(squares[idx], idx);
            })}
          </div>
        );
      })}
    </div>
  );
};
