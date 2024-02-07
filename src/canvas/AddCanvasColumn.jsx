export default function AddCanvasColumn(props) {
  const handleClick = () => {
    const updatedCanvasCols = [...props.canvasCols];
    const emptyCol = ["", "", "", "", "", "", ""];
    updatedCanvasCols.splice(props.selectedCanvasCol + 1, 0, emptyCol);
    props.setCanvasCols(updatedCanvasCols);
    props.setselectCanvasCol(props.selectedCanvasCol + 1);
  };

  return <button onClick={handleClick}>+</button>;
}
