import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  const chatEntryComponents = entries.map((msgData, index) => {
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

ChatLog.propTypes = PropTypes.arrayOf({
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
}).isRequired;

export default ChatLog;