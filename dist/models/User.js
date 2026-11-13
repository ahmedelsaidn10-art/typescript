"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    email;
    password;
    phone;
    _age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 18 || value > 60) {
            throw new Error('Age must be between 18 and 60.');
        }
        this._age = value;
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    removeNotebook(notebook) {
        const notebookIndex = this.notebooks.indexOf(notebook);
        if (notebookIndex === -1) {
            return false;
        }
        this.notebooks.splice(notebookIndex, 1);
        return true;
    }
    getNotebooks() {
        return this.notebooks;
    }
    displayInfo() {
        console.log(`ID: ${this.id}\nName: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nAge: ${this.age}`);
    }
}
exports.User = User;
