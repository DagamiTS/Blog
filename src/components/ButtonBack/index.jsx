import React from 'react';
import { NavLink } from 'react-router-dom';

import backSvg from '../../assets/images/back.svg';

import css from './ButtonBack.module.css';

const ButtonBack = ({ className }) => {
  return (
    <NavLink to="/" className={`${css.btnBack} ${className}`}>
      <img src={backSvg} alt="arrow-left-icon" />
      Back to blog
    </NavLink>
  );
};

export default ButtonBack;