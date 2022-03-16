import React, { useEffect, useState } from "react";
import "../../index.css";

export const Square = (props) => {
  const { value, onClick, isMarked } = props;

  return (
    <button
      className={"square "+(isMarked && "win-marker")}
      onClick={onClick}>
      {value}
    </button>
  );
};
