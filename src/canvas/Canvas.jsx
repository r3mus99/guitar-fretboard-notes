import { useContext } from "react";
import { Context } from "../Context";
import { data } from "../fretboard/FretboardData";

export default function Canvas() {
  const { selectedCanvasCol, setselectCanvasCol, canvasCols, setselectedNote } =
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
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className={selectedCanvasCol === colIndex ? "Selected" : ""}
                onClick={() => {
                  setselectCanvasCol(colIndex);
                  if (data[rowIndex][cell])
                    setselectedNote(data[rowIndex][cell]);
                  else setselectedNote("");
                }}
                title={data[rowIndex][cell]}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
