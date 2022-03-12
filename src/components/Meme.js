const Meme = () => {
  return (
    <form action="">
      <input
        type="text"
        name="firstSentence"
        id="firstSentence"
        placeholder="First Sentence"
      />
      <input
        autocomplete="off"
        type="text"
        name="secondSentence"
        id="secondSentence"
        placeholder="Second Sentence"
      />
      <input type="button" value="Generate" />
    </form>
  );
};

export default Meme;
