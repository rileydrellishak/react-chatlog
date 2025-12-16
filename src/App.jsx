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

const defaultColor = (data) => {
  for (const msg of data) {
    msg.role === 'remote' ? msg.color = 'blue': msg.color = 'green';
  } return data;
};

const App = () => {
  const [messages, setMessages] = useState(defaultColor(localOrRemote(data)));

  const calculateHearts = () => {
    let count = 0;
    for (const message of messages) {
      message.liked ? count += 1: count;
    } return count;
  };

  const handleClickHeart = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (message.id === messageId) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    }); setMessages(updatedMessages);
  };

  const handleClickColor = (sender, buttonColor) => {
    const updatedMessages = messages.map(msg => {
      if (msg.sender === sender) {
        return {...msg, color: buttonColor};
      } else {
        return msg;
      }
    }); setMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>

        <h1>Chat Between <span className={messages[0].color}>
          {messages[0].sender}</span> and <span className={messages[1].color}>
          {messages[1].sender}
        </span>
        </h1>

        <section className='status'>
          <ColorChoice
            name={messages[0].sender}
            color={messages[0].color}
            onClickColor={handleClickColor}
          />

          <h2>{calculateHearts()} ❤️s</h2>

          <ColorChoice
            name={messages[1].sender}
            color={messages[1].color}
            onClickColor={handleClickColor}
          />
        </section>
      </header>

      <main>
        <ChatLog
          entries={messages}
          onClickHeart={handleClickHeart}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
