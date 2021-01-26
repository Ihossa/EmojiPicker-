import React from "react";
import { useState } from 'react';

import style from './ToolType.module.scss'

const emojies = require('emojis-list')
const emojiesText = require('emojis-keywords');

const getEmoji = () => {
  let arrEmoji = [];
  for(let i = 1749; i < 1800; i++) {
    let emojiObj = {
      id: i,
      emojies: emojies[i],
      emojiesText: emojiesText[i]
    };
    arrEmoji.push(emojiObj)
  };
  return arrEmoji;
};

const ToolType = ({setValueInput}) => {
  const arr = getEmoji();
  const [emojiArr, setEmoji] = useState(arr);
  const [emojiHover, setEmojiHover] = useState("");

  
 
  const onMouseEnterHandler = (el) => {
    setEmojiHover(el.target.id)
  };
  const onMouseLeaveHandler = () => {
    setEmojiHover("")
  };

  return (
    <div className = {style.wrap}>
      <div className = {style.toolBar}>
          <h1 className = {style.header}>Smileys & People</h1>
          <div className = {style.emoji}>
            {emojiArr.map((emoji, index) => {
              return ( <div 
                key = {`${index}${emoji}`}
                id = {emoji.id}
                className = {style.smile}
                onMouseEnter = {onMouseEnterHandler}
                onMouseLeave = {onMouseLeaveHandler}
                onClick = {() => setValueInput(emojies[emojiHover])}
                >
                  {emoji.emojies}
                </div>
                )
            })}
          </div>
          <input className = {style.input} value = {emojiHover !== "" ? `${emojies[emojiHover]} ${emojiesText[emojiHover]}` : ""} readOnly />
      </div>
    </div>
  );
}

export default ToolType;