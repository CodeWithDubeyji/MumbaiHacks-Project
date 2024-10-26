import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const {username} = useParams();
    const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Add user message
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: inputText,
        sender: "user"
      }]);
      
      // Simulate bot response
    //   setTimeout(() => {
    //     setMessages(prev => [...prev, {
    //       id: Date.now() + 1,
    //       text: "Thanks for your message! This is a simulated response.",
    //       sender: "bot"
    //     }]);
    //   }, 1000);
      
      setInputText("");
    }
  };

  return (
    <div className="mt-20 flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      {/* Chat header */}
      <div className="px-4 py-3 bg-white border-b rounded-t-lg">
        <h2 className="text-lg font-semibold text-gray-800">{username}</h2>
      </div>

      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input form */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;