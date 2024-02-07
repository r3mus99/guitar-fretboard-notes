import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [selectedNote, setselectNote] = useState("");
  const [selectedCanvasCol, setselectCanvasCol] = useState(-1);
  const [canvasCols, setCanvasCols] = useState([]);

  return (
    <Context.Provider
      value={{
        selectedNote,
        setselectNote,
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
