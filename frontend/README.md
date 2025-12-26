## Simple AI Chat Interface (Mocked Backend)
A full-stack chat application built as part of an internship project for Verba AI, 
which provides web-based chat interfaces for customer support.
This project demonstrates a simple AI-powered chat interface with a mocked backend that responds to specific keywords.

## Tech Stack - developed in IntelliJ
Backend: Node.js 
Frontend: React

## How to Run the Application
1. Start the Backend
   Open a terminal and navigate with **cd backend**
   Start the server with command **node server.js**
   The backend server will start running on port 3000. You should see a confirmation message in the terminal.
2. Start the Frontend
   Open a new terminal window and navigate **cd frontend**
   Install all dependencies, only first time **npm install**
   Start frontend server with  **npm rum dev**
   The terminal will display a local URL like  http://localhost:5173. Click on the link to access the application. 

## Testing the Application
Enter messages in input field containing the following keywords - hello, thanks/thank you, react/node.js/node..
Example: User  **Hello!**
         Ai    **Hello, how can I help you?**

## How This Would Integrate with a Real AI Agent
To integrate with a real AI service, replace the keyword-based mock responses in the backend with API calls to AI services like OpenAI or Claude. The backend would send user messages to the AI API and return the responses. This requires adding API authentication, conversation history management, and proper error handling. The frontend code would remain unchanged.