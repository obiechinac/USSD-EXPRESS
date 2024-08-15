"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(phonuNumber, balance = 0) {
        this.balance = balance;
        this.phoneNumber = phonuNumber;
    }
}
exports.User = User;
