"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./models/Admin");
const NoteBook_1 = require("./models/NoteBook");
const Storage_1 = require("./models/Storage");
const User_1 = require("./models/User");
const user = new User_1.User(1, 'ahmed ahmed', 'ahmed@example.com', 'user-password', '01012345678', 25);
const admin = new Admin_1.Admin(2, 'Omar Ali', 'omar@example.com', 'admin-password', '01098765432', 35);
// Aggregation: create the notebook separately, then associate it with the user.
const notebook = new NoteBook_1.NoteBook();
user.addNotebook(notebook);
// Composition: the notebook creates and stores its notes.
const firstNote = notebook.addNote(101, 'Study plan', 'Review TypeScript classes, inheritance, and relationships this week.', user);
const secondNote = notebook.addNote(102, 'Project ideas', 'Build a small notes app to practice object-oriented programming.', user);
console.log('User information:');
user.displayInfo();
console.log(`User notebooks: ${user.getNotebooks().length}`);
console.log('\nNote preview:');
console.log(`${firstNote.title}: ${firstNote.preview()}`);
console.log(`Author: ${firstNote.author.name}`);
console.log('\nAdmin action:');
admin.manageNotes();
// Generic storage can hold notes while preserving their type.
const noteStorage = new Storage_1.Storage();
noteStorage.addItem(firstNote);
noteStorage.addItem(secondNote);
console.log(`Notes in storage: ${noteStorage.getAllItems().length}`);
console.log(`Removed first note from storage: ${noteStorage.removeItem(firstNote)}`);
console.log(`Removed second note from notebook: ${notebook.removeNote(secondNote.id)}`);
console.log(`Removed notebook from user: ${user.removeNotebook(notebook)}`);
