import './App.css';
import { useState } from 'react';

import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import { dataUpdated } from './dataUtilities';

const App = () => {
  const [messages, setMessages] = useState(dataUpdated);

  const ESTRAGON = messages[1];
  const VLADIMIR = messages[0];

  const numHearts = messages.filter((msg) => msg.liked).length;

  const handleClickHeart = (messageId) => {
    setMessages(prevMsgs =>
      prevMsgs.map(msg => {
        return msg.id === messageId
          ? {...msg, liked: !msg.liked}
          : msg;
      })
    );
  };

  const handleClickColor = (sender, buttonColor) => {
    setMessages(prevMsgs =>
      prevMsgs.map(msg => {
        return msg.sender === sender
          ? {...msg, color: buttonColor}
          : msg;
      })
    );
  };

  return (
    <div id="App">
      <header>

        <h1>
          Chat Between{' '}
          <mark className={VLADIMIR.color}>{VLADIMIR.sender}</mark> and{' '}
          <mark className={ESTRAGON.color}>{ESTRAGON.sender}</mark>
        </h1>

        <section className='status'>
          <ColorChoice
            name={VLADIMIR.sender}
            color={VLADIMIR.color}
            onClickColor={handleClickColor}
          />

          <h2>{numHearts} ❤️s</h2>

          <ColorChoice
            name={ESTRAGON.sender}
            color={ESTRAGON.color}
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
