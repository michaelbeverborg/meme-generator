import trollface from "../images/trollface.png";

const Header = () => {
  return (
    <header>
      <img src={trollface} alt="Troll face" />
      <h3>Meme Generator</h3>
      <p>React project</p>
    </header>
  );
};

export default Header;
