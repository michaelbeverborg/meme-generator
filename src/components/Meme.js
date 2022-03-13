import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    firstSentence: "",
    secondSentence: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <form action="">
        <input
          type="text"
          name="firstSentence"
          id="firstSentence"
          placeholder="First Sentence"
        />
        <input
          type="text"
          name="secondSentence"
          id="secondSentence  "
          placeholder="Second Sentence"
        />
        <input type="button" value="Generate" onClick={getMemeImage} />
      </form>
      <img src={meme.randomImage} alt="Meme img" />
    </main>
  );
};

export default Meme;
