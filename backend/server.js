const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/verba/chat', (req, res) => {
    if (!req.body.message || typeof req.body.message !== 'string') {
        return res.status(400).json({
            message: 'You should write something. Field is required'
        });
    }

    const requestUser = req.body.message.toLowerCase();
    let responseAI = "";

    if (requestUser.includes('hello')) {
        responseAI = 'Hello, how can I help you?';
    } else if (requestUser.includes('can') || requestUser.includes('help')) {
        responseAI = 'Sure. Ask what you want to know.';
    } else if (requestUser.includes('node.js')) {
        responseAI = 'Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser, enabling you to build server-side applications, APIs, and backend services.';
    } else if (requestUser.includes('react')) {
        responseAI = 'React is a JavaScript library for building user interfaces (UI). It helps you create interactive web pages by breaking them into reusable components.';
    } else if (requestUser.includes('thank') || requestUser.includes('thanks')) {
        responseAI = 'You\'re welcome! Is there anything else I can help you with?';
    } else if (requestUser.includes('bye')) {
        responseAI = 'Goodbye! Have a great day!';
    } else {
        responseAI = 'Sorry, can you rephrase your question?';
    }
    setTimeout(() => {
        res.json({message: responseAI});
    }, 2000);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});