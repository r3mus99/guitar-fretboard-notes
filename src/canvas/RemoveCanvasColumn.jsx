export default function RemoveCanvasColumn(props) {
  const handleClick = () => {
    if (props.selectedCanvasCol > props.canvasCols.length) {
      return;
    }
    const updatedCanvasCols = [...props.canvasCols];
    updatedCanvasCols.splice(props.selectedCanvasCol, 1);

    props.setCanvasCols(updatedCanvasCols);

    if (props.selectedCanvasCol > updatedCanvasCols.length - 1) {
      props.setselectCanvasCol(updatedCanvasCols.length - 1);
    }
  };

  return <button onClick={handleClick}>-</button>;
}
