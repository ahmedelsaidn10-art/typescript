"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        const previewLength = 50;
        return this.content.length > previewLength
            ? `${this.content.slice(0, previewLength)}...`
            : this.content;
    }
}
exports.Note = Note;
