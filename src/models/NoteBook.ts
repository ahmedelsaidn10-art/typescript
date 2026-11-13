import { Note } from './Note';
import type { User } from './User';

export class NoteBook {
  private notes: Note[] = [];

  public addNote(id: number, title: string, content: string, user: User): Note {
    const note = new Note(id, title, content, user);
    this.notes.push(note);
    return note;
  }

  public removeNote(id: number): boolean {
    const noteIndex = this.notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) {
      return false;
    }

    this.notes.splice(noteIndex, 1);
    return true;
  }

  public getNotes(): readonly Note[] {
    return this.notes;
  }
}

