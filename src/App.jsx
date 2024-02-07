import { useState } from "react";
import Fretboard from "./fretboard/Fretboard";
import FretboardInput from "./fretboard/FretboardInput";
import "./styles.css";
import Canvas from "./canvas/Canvas";

export default function App() {
  const [selectedNote, setselectNote] = useState("");
  const [selectedCanvasCol, setselectCanvasCol] = useState(0);
  const [canvasCols, setCanvasCols] = useState([
    ["", "0", "", "0", "", "", ""],
  ]);

  const addCanvasColumn = () => {
    setCanvasCols([...canvasCols, ["", "", "", "", "", "", ""]]);
    setselectCanvasCol(canvasCols.length);
  };

  const removeCanvasColumn = () => {
    if (selectedCanvasCol === 0) {
      return;
    }
    const newCols = [...canvasCols].slice(selectedCanvasCol, 1);
    console.log(newCols);
    setCanvasCols(newCols);
  };

  return (
    <div className="App">
      <Fretboard selectedNote={selectedNote} onClick={setselectNote} />
      <div className="Controls">
        <FretboardInput value={selectedNote} onChange={setselectNote} />
        <button onClick={addCanvasColumn}>+</button>
        <button onClick={removeCanvasColumn}>-</button>
      </div>
      {selectedCanvasCol}
      <Canvas
        cols={canvasCols}
        selectedCol={selectedCanvasCol}
        setselectCanvasCol={setselectCanvasCol}
      />
    </div>
  );
}
