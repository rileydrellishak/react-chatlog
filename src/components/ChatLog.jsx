import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onClickHeart }) => {
  const chatEntryComponents = entries.map((msgData, index) => {
    return (
      <li key={index}>
        <ChatEntry
          id={msgData.id}
          sender={msgData.sender}
          body={msgData.body}
          timeStamp={msgData.timeStamp}
          liked={msgData.liked}
          role={msgData.role}
          onClickHeart={onClickHeart}>
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

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
  })).isRequired,
  onClickHeart: PropTypes.func.isRequired
};

export default ChatLog;