import React from 'react';
import style from './HomePage.module.scss'
import InputEmoji from '../../components/Input'

const HomePage = () => {
  return (
    <div className = {style.homePage}>
      <InputEmoji />
    </div>
  );
}

export default HomePage;