export function isNoteSelected(note, selectedNote) {
  if (!selectedNote) return false;
  if (note.includes("#") && !selectedNote.includes("#")) return false;

  return note.includes(selectedNote);
}
