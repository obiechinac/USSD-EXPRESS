"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Usermanager_1 = require("./Usermanager");
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Optional: Keep urlencoded parser if you also handle form data
app.use(body_parser_1.default.urlencoded({ extended: true }));
const userManager = new Usermanager_1.UserManager();
app.post('/register', (req, res) => {
    const { phoneNumber } = req.body;
    const message = userManager.addUser(phoneNumber);
    res.send(message);
});
app.post('/check-balance', (req, res) => {
    const { phoneNumber } = req.body;
    const message = userManager.checkBalance(phoneNumber);
    res.send(message);
});
app.post('/load', (req, res) => {
    const { phoneNumber, amount } = req.body;
    // Log the incoming values
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Amount: ${amount}`);
    const message = userManager.updateBalance(phoneNumber, amount);
    res.send(message);
});
app.post('/debit', (req, res) => {
    const { phoneNumber, amount } = req.body;
    const message = userManager.deductBalance(phoneNumber, amount);
    res.send(message);
});
// Error handling middleware for invalid routes
app.use((req, res) => {
    res.status(404).send('Endpoint not found.');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
