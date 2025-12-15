import '../App.css';
import './ColorChoice.css';

const ColorChoice = ({ name }) => {
  return (
    <section className='color-selector'>
      <h3>{name}'s color:</h3>
      <section className='buttons'>
        <button>🍓</button>
        <button>🍊</button>
        <button>🍋</button>
        <button>🍏</button>
        <button>🫐</button>
        <button>🍇</button>
      </section>
    </section>
  );
};

export default ColorChoice;