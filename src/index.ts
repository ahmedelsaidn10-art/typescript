import { Admin } from './models/Admin';
import { Note } from './models/Note';
import { NoteBook } from './models/NoteBook';
import { Storage } from './models/Storage';
import { User } from './models/User';

const user = new User(
  1,
  'ahmed ahmed',
  'ahmed@example.com',
  'user-password',
  '01012345678',
  25,
);

const admin = new Admin(
  2,
  'Omar Ali',
  'omar@example.com',
  'admin-password',
  '01098765432',
  35,
);

const notebook = new NoteBook();
user.addNotebook(notebook);

const firstNote = notebook.addNote(
  101,
  'Study plan',
  'Review TypeScript classes, inheritance, and relationships this week.',
  user,
);
const secondNote = notebook.addNote(
  102,
  'Project ideas',
  'Build a small notes app to practice object-oriented programming.',
  user,
);

console.log('User information:');
user.displayInfo();
console.log(`User notebooks: ${user.getNotebooks().length}`);

console.log('\nNote preview:');
console.log(`${firstNote.title}: ${firstNote.preview()}`);
console.log(`Author: ${firstNote.author.name}`);

console.log('\nAdmin action:');
admin.manageNotes();

const noteStorage = new Storage<Note>();
noteStorage.addItem(firstNote);
noteStorage.addItem(secondNote);
console.log(`Notes in storage: ${noteStorage.getAllItems().length}`);
console.log(`Removed first note from storage: ${noteStorage.removeItem(firstNote)}`);

console.log(`Removed second note from notebook: ${notebook.removeNote(secondNote.id)}`);
console.log(`Removed notebook from user: ${user.removeNotebook(notebook)}`);
