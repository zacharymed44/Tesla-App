import React from 'react';
import styled from 'styled-components';
import './button.css';

const Button = ({imp, text, link}) => {
  return (
    <div className={`${imp === 'secondary' ? 'button__white' : 'button'}`}>
      <a href={link}>
        {text}
      </a>
    </div>

  )
}

export default Button
