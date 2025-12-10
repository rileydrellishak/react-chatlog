import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((msgData, index) => {
    return (
      <li key={index}>
        <ChatEntry
          sender={msgData.sender}
          body={msgData.body}
          timeStamp={msgData.timeStamp}
          liked={msgData.liked}>
        </ChatEntry>
      </li>
    );
  });

  return (
    <ul className='chat-log'>
      {chatEntryComponents}
    </ul>
  );
};

export default ChatLog;