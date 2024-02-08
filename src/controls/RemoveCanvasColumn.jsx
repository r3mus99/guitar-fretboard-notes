import { useContext } from "react";
import { Context } from "../Context";

export default function RemoveCanvasColumn() {
  const { selectedCanvasCol, setselectCanvasCol, canvasCols, setCanvasCols } =
    useContext(Context);
  const handleClick = () => {
    if (selectedCanvasCol > canvasCols.length) {
      return;
    }
    const updatedCanvasCols = [...canvasCols];
    updatedCanvasCols.splice(selectedCanvasCol, 1);

    setCanvasCols(updatedCanvasCols);

    if (selectedCanvasCol > updatedCanvasCols.length - 1) {
      setselectCanvasCol(updatedCanvasCols.length - 1);
    }
  };

  return <button onClick={handleClick}>-</button>;
}
