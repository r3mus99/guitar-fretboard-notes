import { useContext } from "react";
import { Context } from "../Context";

export default function AddCanvasColumn() {
  const { selectedCanvasCol, setselectCanvasCol, canvasCols, setCanvasCols } =
    useContext(Context);
  const handleClick = () => {
    const updatedCanvasCols = [...canvasCols];
    const emptyCol = ["", "", "", "", "", ""];
    updatedCanvasCols.splice(selectedCanvasCol + 1, 0, emptyCol);
    setCanvasCols(updatedCanvasCols);
    setselectCanvasCol(selectedCanvasCol + 1);
  };

  return <button onClick={handleClick}>+</button>;
}
