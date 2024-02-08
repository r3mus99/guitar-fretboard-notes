import { useContext } from "react";
import { synth } from "../App";
import { Context } from "../Context";
import { isNoteSelected } from "../Utils";
import "./sheet.scss";

const notes = [
  "G5",
  "F5",
  "E5",
  "D5",
  "C5",
  "B4",
  "A4",
  "G4",
  "F4",
  "E4",
  "D4",
];

export default function Sheet() {
  const { selectedNote, setselectedNote } = useContext(Context);

  return (
    <div className="Sheet">
      {notes.map((note, index) => (
        <div
          key={note + index}
          className={
            isNoteSelected(note, selectedNote) ? "Note Selected" : "Note"
          }
          style={{ left: `${200 - index * 20}px` }}
          onClick={() => {
            synth.triggerAttackRelease(note, "16n");
            setselectedNote(note);
          }}
        >
          {note}
        </div>
      ))}
      <div className="Lines">
        {Array(5)
          .fill()
          .map((_, index) => (
            <div key={index} className="Line"></div>
          ))}
      </div>
    </div>
  );
}
