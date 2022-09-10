import { useState } from "react";
import "./App.css";
import { data } from "./data";

const emojiDirectory = Object.keys(data);
function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const [inputEmoji, setInputEmoji] = useState("");

  const emojiHandler = (e) => {
    const emoji = e.target.value;
    setInputEmoji(emoji);

    if (emoji in data) {
      setEmojiMeaning(data[emoji]);
    } else if (emoji === "") {
      setEmojiMeaning("");
    } else {
      setEmojiMeaning("Ooops...entered emoji is not in our database.");
    }
  };

  const clickHandler = (emoji) => {
    setEmojiMeaning(`${emoji} ${data[emoji]}`);
  };

  return (
    <div className="app">
      <h1>Know Your Emoticon</h1>
      <p>
        Tired of searching the actual meaning of the emojis you use ?? You are
        at the right place.
      </p>
      <input
        type="text"
        placeholder="Enter an emoji"
        value={inputEmoji}
        onChange={emojiHandler}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span className="meaning">{inputEmoji}</span>
        <span className="meaning">{emojiMeaning}</span>
      </div>
      <div className="emojiList">
        {emojiDirectory.map((emoji, index) => (
          <span key={index} onClick={() => clickHandler(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
      <p>You can also click on an emoji to get the meaning</p>
      <div className="social-icons ">
        <p className="footer" style={{ color: " black" }}>
          Copyright &copy; 2022 - Gurudatt Puranik
        </p>
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gurudatt_puranik/">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p className="responsiveFooter">
        Copyright &copy; 2022 - Gurudatt Puranik
      </p>
    </div>
  );
}

export default App;
