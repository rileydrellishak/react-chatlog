import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Between {messages[0].sender} and {messages[1].sender}</h1>
      </header>
      <main>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
