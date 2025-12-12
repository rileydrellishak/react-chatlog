import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = ({ key, sender, body, timeStamp, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const toggleHeart = () =>{
    setIsLiked(!isLiked);
  };

  const displayHeart = () => {
    return isLiked ? '❤️': '🤍';
  };

  return (
    <article className="chat-entry local" id={key}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className="like" onClick={event => toggleHeart()}>{displayHeart()}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
