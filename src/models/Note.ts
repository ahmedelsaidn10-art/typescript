import type { User } from './User';

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public author: User;

  constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
  }

  public preview(): string {
    const previewLength = 50;
    return this.content.length > previewLength
      ? `${this.content.slice(0, previewLength)}...`
      : this.content;
  }
}
