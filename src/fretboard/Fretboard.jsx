const data = [
  ["E", "F", "", "G", "", "A", "", "B", "C", "", "D", "", "E"],
  ["B", "C", "", "D", "", "E", "F", "", "G", "", "A", "", "B"],
  ["G", "", "A", "", "B", "C", "", "D", "", "E", "F", "", "G"],
  ["D", "", "E", "F", "", "G", "", "A", "", "B", "C", "", "D"],
  ["A", "", "B", "C", "", "D", "", "E", "F", "", "G", "", "A"],
  ["E", "F", "", "G", "", "A", "", "B", "C", "", "D", "", "E"],
];

export default function Fretboard(props) {
  return (
    <table className="Fretboard">
      {data.map((row) => (
        <Row
          notes={row}
          selectedNote={props.selectedNote}
          onClick={props.onClick}
        />
      ))}
    </table>
  );
}

function Row(props) {
  const backgrounds = [3, 5, 7, 9, 12];
  const handleClick = (note) => {
    if (note) {
      props.onClick(note);
    }
  };
  return (
    <tr>
      {props.notes.map((note, index) => (
        <Cell
          note={note}
          bold={index === 0}
          border={index === 1}
          background={backgrounds.includes(index)}
          selected={note && note === props.selectedNote}
          handleClick={() => handleClick(note)}
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
  return (
    <td className={clName} onClick={props.handleClick}>
      {props.note}
    </td>
  );
}
