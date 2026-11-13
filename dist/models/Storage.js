"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex === -1) {
            return false;
        }
        this.items.splice(itemIndex, 1);
        return true;
    }
    getAllItems() {
        return this.items;
    }
}
exports.Storage = Storage;
