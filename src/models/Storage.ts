export class Storage<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public removeItem(item: T): boolean {
    const itemIndex = this.items.indexOf(item);

    if (itemIndex === -1) {
      return false;
    }

    this.items.splice(itemIndex, 1);
    return true;
  }

  public getAllItems(): readonly T[] {
    return this.items;
  }
}
