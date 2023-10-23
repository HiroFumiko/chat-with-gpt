import React, { useState } from 'react';
import ChatContainer from './components/Chat/ChatContainer';
import { getResponseFromGPT3 } from './helpers/api';

function App() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSend = async () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { content: currentMessage.trim(), sender: 'user' }]);
      setCurrentMessage('');
      const botResponse = await getResponseFromGPT3(messages, currentMessage.trim());
      setMessages(prev => [...prev, { content: botResponse, sender: 'bot' }]);
    }
  };

  return (
    <ChatContainer
      messages={messages}
      currentMessage={currentMessage}
      handleSend={handleSend}
      setCurrentMessage={setCurrentMessage}
    />
  );
}

export default App;
