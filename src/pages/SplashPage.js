import React from 'react';
import Program from '../components/Program';
import { currentShow } from '../DAL/ShowList';
import '../css/app.css';
const SplashPage = () => {
  return (
    <Program showModel={currentShow} />
  );
};

export default SplashPage;