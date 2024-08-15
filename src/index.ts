import express from "express";
import bodyParser from "body-parser";
import { UserManager } from "./Usermanager";

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Optional: Keep urlencoded parser if you also handle form data
app.use(bodyParser.urlencoded({ extended: true }));

const userManager = new UserManager();

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
