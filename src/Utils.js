export function isNoteSelected(note, selectedNote) {
  if (!selectedNote) return false;

  return selectedNote && note.includes(selectedNote);
}
