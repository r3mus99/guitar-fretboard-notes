import Fretboard from "./fretboard/Fretboard";
import FretboardInput from "./controls/FretboardSearch";
import "./styles.scss";
import Canvas from "./canvas/Canvas";
import AddCanvasColumn from "./controls/AddCanvasColumn";
import RemoveCanvasColumn from "./controls/RemoveCanvasColumn";
import Sheet from "./sheet/Sheet";

export default function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Fretboard />
        <Sheet />
      </div>
      <div className="Controls">
        <FretboardInput />
        <AddCanvasColumn />
        <RemoveCanvasColumn />
      </div>
      <Canvas />
    </div>
  );
}
