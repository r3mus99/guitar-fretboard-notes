import { useContext } from "react";
import { Context } from "../Context";
import "./fretboard.css";

const data = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
];

// todo data with flat "b" sign

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
  const backgrounds = [3, 5, 7, 9, 12];
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
          bold={index === 0}
          border={index === 1}
          background={backgrounds.includes(index)}
          selected={note && note === selectedNote}
          handleClick={() => handleClick(note, props.index, index)}
        />
      ))}
    </tr>
  );
}

function Cell(props) {
  let clName = "Cell";
  if (props.border) {
    clName += " Border";
  }
  if (props.bold) {
    clName += " Bold";
  }
  if (props.selected) {
    clName += " Selected";
  } else if (props.background) {
    clName += " Background";
  }

  // Check if '#' or 'b' is present in props.note and render accordingly
  const renderNote = () => {
    if (props.note.includes("#") || props.note.includes("b")) {
      const noteWithoutSign = props.note.replace(/[#b]/g, "");
      const sign = props.note.includes("#") ? "#" : "b";

      return (
        <>
          <span className="NoteWithoutSign">{noteWithoutSign}</span>
          <sup className="MusicSign">{sign}</sup>
        </>
      );
    } else {
      return props.note;
    }
  };

  return (
    <td className={clName} onClick={props.handleClick}>
      {renderNote()}
    </td>
  );
}
