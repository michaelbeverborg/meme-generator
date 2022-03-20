import { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    botText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setMeme(prevMeme => ({ ...prevMeme, [name]: value }));
  }

  return (
    <main>
      <form action="">
        <input
          type="text"
          name="topText"
          id="topText"
          placeholder="First Sentence"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="botText"
          id="botText  "
          placeholder="Second Sentence"
          value={meme.botText}
          onChange={handleChange}
        />
        <input type="button" value="Generate" onClick={getMemeImage} />
      </form>
      <div className="meme">
        <h2 className="topText">{meme.topText}</h2>
        <h2 className="botText">{meme.botText}</h2>
        <img src={meme.randomImage} alt="Meme img" />
      </div>
    </main>
  );
};

export default Meme;
