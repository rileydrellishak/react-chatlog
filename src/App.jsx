import './App.css';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(data);

  return (
    <div id="App">
      <header>
        <h1>Chat Between {messages[0].sender} and {messages[1].sender}</h1>
        <h2>0 ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
