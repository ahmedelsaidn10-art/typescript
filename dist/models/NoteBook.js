"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteBook = void 0;
const Note_1 = require("./Note");
class NoteBook {
    notes = [];
    addNote(id, title, content, user) {
        const note = new Note_1.Note(id, title, content, user);
        this.notes.push(note);
        return note;
    }
    removeNote(id) {
        const noteIndex = this.notes.findIndex((note) => note.id === id);
        if (noteIndex === -1) {
            return false;
        }
        this.notes.splice(noteIndex, 1);
        return true;
    }
    getNotes() {
        return this.notes;
    }
}
exports.NoteBook = NoteBook;
