export default function Canvas(props) {
  const transposeArray = (array) => {
    return array[0].map((_, i) => array.map((row) => row[i]));
  };

  const transposedCols = transposeArray(props.cols);

  return (
    <table className="Canvas">
      <tbody>
        {transposedCols.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <td
                  key={cellIndex}
                  className={props.selectedCol === cellIndex ? "Selected" : ""}
                  onClick={() => props.setselectCanvasCol(cellIndex)}
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
