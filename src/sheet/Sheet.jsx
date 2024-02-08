import { useContext } from "react";
import { Context } from "../Context";
import "./sheet.css";

const notes = ["G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D"];

export default function Sheet() {
  const { selectedNote, setselectedNote } = useContext(Context);

  return (
    <div className="Sheet">
      {notes.map((note, index) => (
        <div
          key={note + index}
          className={note === selectedNote ? "Note Selected" : "Note"}
          style={{ left: `${200 - index * 20}px` }}
          onClick={() => setselectedNote(note)}
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
