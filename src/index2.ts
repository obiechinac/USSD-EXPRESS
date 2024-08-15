import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.post('/ussd', (req, res) => {

    console.log("body is: "+req.body);
    const { text, sessionId, phoneNumber } = req.body;

    if (text === null || !sessionId || !phoneNumber) {
        return res.status(400).send("Missing required fields");
    }

    let response = '';

    if (text === '') {
        response = `CON Welcome to our service. Choose an option:\n1. Check Balance\n2. Buy Airtime`;
    } else if (text === '1') {
        response = `END Your balance is $10.`;
    } else if (text === '2') {
        response = `CON Enter amount to buy airtime:`;
    } else if (text.startsWith('2*')) {
        const amount = text.split('*')[1];
        response = `END You have purchased ${amount} worth of airtime.`;
    } else {
        response = `END Invalid option selected.`;
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
});

app.listen(3000, () => {
    console.log('USSD service running on port 3000');
});
