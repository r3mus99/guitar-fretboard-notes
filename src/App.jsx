import { useState } from "react";
import Fretboard from "./fretboard/Fretboard";
import FretboardInput from "./fretboard/FretboardInput";
import "./styles.css";
import Canvas from "./canvas/Canvas";
import AddCanvasColumn from "./canvas/AddCanvasColumn";
import RemoveCanvasColumn from "./canvas/RemoveCanvasColumn";

export default function App() {
  const [selectedNote, setselectNote] = useState("");
  const [selectedCanvasCol, setselectCanvasCol] = useState(-1);
  const [canvasCols, setCanvasCols] = useState([]);

  return (
    <div className="App">
      <Fretboard
        canvasCols={canvasCols}
        selectedCanvasCol={selectedCanvasCol}
        setCanvasCols={setCanvasCols}
        selectedNote={selectedNote}
        setselectNote={setselectNote}
      />
      <div className="Controls">
        <FretboardInput value={selectedNote} onChange={setselectNote} />
        <AddCanvasColumn
          canvasCols={canvasCols}
          selectedCanvasCol={selectedCanvasCol}
          setCanvasCols={setCanvasCols}
          setselectCanvasCol={setselectCanvasCol}
        />
        <RemoveCanvasColumn
          canvasCols={canvasCols}
          selectedCanvasCol={selectedCanvasCol}
          setCanvasCols={setCanvasCols}
          setselectCanvasCol={setselectCanvasCol}
        />
      </div>
      <Canvas
        cols={canvasCols}
        selectedCol={selectedCanvasCol}
        setselectCanvasCol={setselectCanvasCol}
      />
    </div>
  );
}
