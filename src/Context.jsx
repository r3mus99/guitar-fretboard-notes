import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [selectedNote, setselectedNote] = useState("");
  const [selectedCanvasCol, setselectCanvasCol] = useState(-1);
  const [canvasCols, setCanvasCols] = useState([]);

  return (
    <Context.Provider
      value={{
        selectedNote,
        setselectedNote,
        selectedCanvasCol,
        setselectCanvasCol,
        canvasCols,
        setCanvasCols,
      }}
    >
      {children}
    </Context.Provider>
  );
};
