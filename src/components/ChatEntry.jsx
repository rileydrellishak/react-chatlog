import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

// goal: Vladmir is remote, Estragon is local. assign css class accordingly .remote vs. .local

const ChatEntry = ({ id, sender, body, timeStamp, liked, role, onHeartToggle }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const clickHeart = () => {
    setIsLiked(!isLiked);
    onHeartToggle(id);
  };

  const displayHeart = () => {
    return isLiked ? '❤️': '🤍';
  };

  const classNameMsg = (role) => {
    if (role === 'local') {
      return 'chat-entry local';
    } else {
      return 'chat-entry remote';
    }
  };

  return (
    <article className={classNameMsg(role)} id={id}>
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
  role: PropTypes.string.isRequired,
  onHeartToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
