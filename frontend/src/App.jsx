import {useState} from 'react'
import './App.css'

export default function App() {
    const [chat, setChat] = useState([]);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const message = async () => {
        if (!value) return;

        const userMessage = value;
        const timestampsUser = new Date().toLocaleTimeString('mk-MK', {hour: '2-digit', minute: '2-digit'});

        setChat(prev => [...prev, {text: value, user: true, time: timestampsUser}]);
        setLoading(true);
        setValue('');

        try {
            const response = await fetch('http://localhost:3000/verba/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message: userMessage})
            });

            const data = await response.json();
            const timestampsAi = new Date().toLocaleTimeString('mk-MK', {hour: '2-digit', minute: '2-digit'});

            setChat(prev => [...prev, {text: data.message, user: false, time: timestampsAi}]);

        } catch (err) {
            setChat(prev => [...prev, {
                text: 'Error, backend must be running',
                user: false,
                time: new Date().toLocaleTimeString('mk-MK', {hour: '2-digit', minute: '2-digit'})
            }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <div key={index} className={msg.user ? 'msg-user' : 'msg-ai'}>
                        <p>{msg.text}</p>
                        <span>{msg.time}</span>
                    </div>
                ))}
                {loading && (
                    <div className="loading">Typing...</div>
                )}
            </div>

            <div className="input-box">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && message()}
                    placeholder="Enter your answer here..."
                />
                <button onClick={message}>Send</button>
            </div>
        </div>
    );
}