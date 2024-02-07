import { useContext } from "react";
import { Context } from "../Context";

export default function Canvas() {
  const { selectedCanvasCol, setselectCanvasCol, canvasCols } =
    useContext(Context);
  const transposeArray = (array) => {
    return array[0].map((_, i) => array.map((row) => row[i]));
  };

  const transposedCols =
    canvasCols.length > 0 ? transposeArray(canvasCols) : [];

  return (
    <table className="Canvas">
      <tbody>
        {transposedCols.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <td
                  key={cellIndex}
                  className={selectedCanvasCol === cellIndex ? "Selected" : ""}
                  onClick={() => setselectCanvasCol(cellIndex)}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
