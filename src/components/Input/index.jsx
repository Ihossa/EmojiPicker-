import React from 'react';
import { useState } from 'react';
import emoji from './../../assets/smile.png';
import ToolType from '../ToolType'

import style from'./Input.module.scss';

const emojies = require('emojis-list')
const emojiesText = require('emojis-keywords');

const Input = () => {

  const [isShowing, setIsShowing] = useState(false);
  const [valueInput, setValueInput] = useState("")

  const toggle = () => {
    setIsShowing(!isShowing);
  }

  const setEmoji = (emoji) => {
    setValueInput(valueInput + emoji);
  }

  const inputChangedHandler = (event) => {
    let reg = /:([^\s]+):/g;
    let inputValue = event.target.value
    
    
  
    if(inputValue.match(reg)){  
      console.log(inputValue.match(reg))
        let emoji = emojiesText.indexOf(inputValue.match(reg)[inputValue.match(reg).length-1]);
        let value = inputValue.replace(inputValue.match(reg)[inputValue.match(reg).length-1], emojies[emoji])
        console.log(emoji, value)
        if(emoji !== -1){
          setValueInput(value);
        } else {
          setValueInput(inputValue);
        }
       
    } else {
      setValueInput(inputValue);
    }
  }

  return (
    <div className = {style.input}>
      { isShowing && <ToolType setValueInput = {setEmoji} /> }
      <div className={style.inputBlock}>
        <input
          className={style.inputText}
          type = "text" 
          placeholder="Message #general"
          onChange = {(event) => inputChangedHandler(event)}
          value = {valueInput}
        />
        <img
          className={style.inputEmoji}
          src = {emoji}
          alt = "smile"
          onClick = {toggle}
        />
      </div>
    </div>
  );
}

export default Input;
