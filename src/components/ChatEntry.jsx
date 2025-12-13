import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onHeartToggle }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const clickHeart = () => {
    setIsLiked(!isLiked);
    onHeartToggle(id);
  };

  const displayHeart = () => {
    return isLiked ? '❤️': '🤍';
  };

  return (
    <article className="chat-entry local" id={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className="like" onClick={clickHeart}>{displayHeart()}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onHeartToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
