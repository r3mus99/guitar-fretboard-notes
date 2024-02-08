import { useContext } from "react";
import { synth } from "../App";
import { Context } from "../Context";
import { isNoteSelected } from "../Utils";
import "./fretboard.scss";
import { data } from "./FretboardData";

export default function Fretboard() {
  const { setselectedNote, selectedCanvasCol, canvasCols, setCanvasCols } =
    useContext(Context);
  const onClick = (value, row, col) => {
    if (canvasCols.length > 0) {
      const updatedCanvasCols = [...canvasCols];
      const oldValue = canvasCols[selectedCanvasCol][row - 1];
      if (oldValue === col) {
        updatedCanvasCols[selectedCanvasCol][row - 1] = "";
      } else {
        updatedCanvasCols[selectedCanvasCol][row - 1] = col;
      }

      setCanvasCols(updatedCanvasCols);
    }

    //play note for the duration of an 16th note
    synth.triggerAttackRelease(value, "16n");
    setselectedNote(value);
  };

  return (
    <table className="Fretboard">
      <tbody>
        {data.map((row, index) => (
          <Row key={index} index={index} notes={row} onClick={onClick} />
        ))}
      </tbody>
    </table>
  );
}

function Row(props) {
  const { selectedNote } = useContext(Context);
  const handleClick = (note, rowIndex, index) => {
    if (note) {
      props.onClick(note, rowIndex + 1, index);
    }
  };
  return (
    <tr>
      {props.notes.map((note, index) => (
        <Cell
          key={index}
          note={note}
          selected={isNoteSelected(note, selectedNote)}
          handleClick={() => handleClick(note, props.index, index)}
        />
      ))}
    </tr>
  );
}

function Cell(props) {
  const renderNote = () => {
    const noteWithoutSign = props.note[0];
    const sign = props.note.slice(1);

    return (
      <>
        <span className="NoteWithoutSign">{noteWithoutSign}</span>
        <sup className="MusicSign">{sign}</sup>
      </>
    );
  };

  return (
    <td
      className={"Cell" + (props.selected ? " Selected" : "")}
      onClick={props.handleClick}
    >
      {renderNote()}
    </td>
  );
}
