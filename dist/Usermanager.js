"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const User_1 = require("./User");
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(phoneNumber) {
        if (this.getUser(phoneNumber)) {
            return "Phone Number Already registered";
        }
        this.users.push(new User_1.User(phoneNumber));
        return "User Registered Successfully";
    }
    getUser(phoneNumber) {
        return this.users.find(user => user.phoneNumber === phoneNumber);
    }
    checkBalance(phoneNumber) {
        const user = this.getUser(phoneNumber);
        if (user) {
            return `Balance: ${user.balance}`;
        }
        return "User not found";
    }
    updateBalance(phoneNumber, amountStr) {
        const user = this.getUser(phoneNumber);
        if (user) {
            // This Ensures the amount is positive
            console.log(amountStr);
            const amount = Number(amountStr);
            if (isNaN(amount)) {
                console.log(amount);
                return "isNan";
            }
            if (isNaN(amount) || amount <= 0) {
                return "Invalid amount. Amount should be a positive number.";
            }
            user.balance += amount;
            return "Balance updated successfully.";
        }
        return "User not found.";
    }
    deductBalance(phoneNumber, amount) {
        const user = this.getUser(phoneNumber);
        if (user && user.balance >= amount) {
            user.balance -= amount;
            return 'Debit successful.';
        }
        return 'Insufficient funds or user not found.';
    }
}
exports.UserManager = UserManager;
