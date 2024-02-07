import Fretboard from "./fretboard/Fretboard";
import FretboardInput from "./fretboard/FretboardInput";
import "./styles.css";
import Canvas from "./canvas/Canvas";
import AddCanvasColumn from "./canvas/AddCanvasColumn";
import RemoveCanvasColumn from "./canvas/RemoveCanvasColumn";

export default function App() {
  return (
    <div className="App">
      <Fretboard />
      <div className="Controls">
        <FretboardInput />
        <AddCanvasColumn />
        <RemoveCanvasColumn />
      </div>
      <Canvas />
    </div>
  );
}
