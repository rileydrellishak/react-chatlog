import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, role, color, onClickHeart }) => {

  const clickHeart = () => {
    onClickHeart(id);
  };

  const displayHeart = () => {
    return liked ? '❤️': '🤍';
  };

  const roleClass = (role) => {
    return role === 'local' ? 'chat-entry local': 'chat-entry remote';
  };

  return (
    <article className={roleClass(role)} id={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
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
  color: PropTypes.string.isRequired,
  onClickHeart: PropTypes.func.isRequired,
};

export default ChatEntry;
