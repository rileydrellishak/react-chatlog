import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import data from './data/messages.json';
import { useState } from 'react';

const localOrRemote = (data) => {
  for (const msg of data) {
    msg.sender === 'Estragon' ? msg.role = 'remote': msg.role = 'local';
  } return data;
};

const App = () => {
  const [messages, setMessages] = useState(localOrRemote(data));

  const calculateHearts = () => {
    let count = 0;
    for (const message of messages) {
      message.liked ? count += 1: count;
    } return count;
  };

  const toggleHeart = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (message.id === messageId) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    }); setMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {messages[0].sender} and {messages[1].sender}</h1>
        <section className='status'>
          <ColorChoice name={messages[0].sender}></ColorChoice>
          <h2>{calculateHearts()} ❤️s</h2>
          <ColorChoice name={messages[1].sender}></ColorChoice>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} onHeartToggle={toggleHeart}></ChatLog>
      </main>
    </div>
  );
};

export default App;
