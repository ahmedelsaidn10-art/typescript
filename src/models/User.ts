import type { NoteBook } from './NoteBook';

export class User {
  public id: number;
  public name: string;
  public email: string;
  private password: string;
  public phone: string;
  private _age!: number;
  private notebooks: NoteBook[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    if (value < 18 || value > 60) {
      throw new Error('Age must be between 18 and 60.');
    }

    this._age = value;
  }

  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  public removeNotebook(notebook: NoteBook): boolean {
    const notebookIndex = this.notebooks.indexOf(notebook);

    if (notebookIndex === -1) {
      return false;
    }

    this.notebooks.splice(notebookIndex, 1);
    return true;
  }

  public getNotebooks(): readonly NoteBook[] {
    return this.notebooks;
  }

  public displayInfo(): void {
    console.log(
      `ID: ${this.id}\nName: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nAge: ${this.age}`,
    );
  }
}
