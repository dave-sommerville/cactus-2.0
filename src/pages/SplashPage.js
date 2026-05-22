import React, {useState} from 'react';
import Program from '../components/Program';
import { Unresolved, sssjgGimli } from '../DAL/ShowList';
import '../css/app.css';

const SplashPage = () => {
  return (
    <div className="splash-container container">
      {/* <section className="flex gap">
        <a href="#unresolved" className="btn">Unresolved</a>
        <a href="sssjGimli" className="btn">S. S. S. J. G.</a>
      </section> */}
      <div className="epithet">
        <p>Bringing people together</p>
        <p>to create and play.</p>
        <p>Cactus Theatre Co was created</p>
        <p>in memory of our friend</p>
        <p>Daniel Gilmour,</p>
        <p>who left the world's stage too soon.</p>
      </div>
      <h2>Winnipeg Fringe Festival 2026</h2>
      <Program
        showModel={Unresolved}
        id="unresolved"
      />
      <Program
        showModel={sssjgGimli}
        id="sssjgGimli"
      />
      </div>
  );
};

export default SplashPage;