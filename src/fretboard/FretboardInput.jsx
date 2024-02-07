import React, { useContext } from "react";
import { Context } from "../Context";

export default function FretboardInput() {
  const { selectedNote, setselectNote } = useContext(Context);
  return (
    <input
      type="text"
      maxLength={2}
      value={selectedNote}
      onChange={(e) => {
        const value = e.target.value ? e.target.value.toUpperCase() : "";
        setselectNote(value);
      }}
    />
  );
}
