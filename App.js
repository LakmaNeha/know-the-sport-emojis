import React, { useState } from "react";
import "./styles.css";

var color = " blue ";
var fontColor = "white";
var txtMsg = " Know - the - sport emojis ";

const emojiDictionary = {
  "⛷️": "SKIER--A person downhill-skiiing.",
  "🏌️":
    "GOLFING--A person swinging a golf club, attempting to hit a golf ball.",
  "🏄": "SURFING--A person on a surfboard, riding on a wave in the ocean.",
  "🤼": "WRESTLING--Two people in the sport of wrestling.",
  "⚽": "SOCCER--A round, black and white ball used in the game of soccer",
  "⚾":
    "BASEBALL--A white baseball, with regulation red stitching. Used in the game of the same name, baseball.",
  "🏑": "HOCKEY--A hockey stick and ball, used in the sport of field hockey. "
};
var emojiList = ["⛷️", "🏌️", "🏄", "🤼", "⚽", "⚾", "🏑"];
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function clickIconHandler(item) {
    meaning = emojiDictionary[item];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color, color: fontColor }}>{txtMsg}</h1>

      <input
        placeholder="copy-paste the emoji you want to know...."
        onChange={inputEmojiHandler}
      />
      <div className="body-font">{meaning} </div>
      <div style={{ color: color }}>
        List of emojis present in my database are{" "}
      </div>
      <u1 className="listDisplay">
        {emojiList.map(function (item) {
          return (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => clickIconHandler(item)}
            >
              {item}
            </li>
          );
        })}
      </u1>
    </div>
  );
}
