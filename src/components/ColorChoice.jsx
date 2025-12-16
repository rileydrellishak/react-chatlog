import '../App.css';
import './ColorChoice.css';
import colorData from '../data/colors.json';
import PropTypes from 'prop-types';

const ColorChoice = ({ name, color, onClickColor }) => {
  const clickColor = (event) => {
    const newColor = colorData.find(color => color.emoji === event.target.textContent).cssClassName;
    onClickColor(name, newColor);
  };

  return (
    <section className='color-selector'>
      <h3 className={color}>{name}'s color:</h3>
      <section className='buttons'>
        <button onClick={clickColor}>🍓</button>
        <button onClick={clickColor}>🍊</button>
        <button onClick={clickColor}>🍋</button>
        <button onClick={clickColor}>🍏</button>
        <button onClick={clickColor}>🫐</button>
        <button onClick={clickColor}>🍇</button>
      </section>
    </section>
  );
};

ColorChoice.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClickColor: PropTypes.func.isRequired
};

export default ColorChoice;