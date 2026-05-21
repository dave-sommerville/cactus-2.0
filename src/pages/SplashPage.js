import React, {useState} from 'react';
import Program from '../components/Program';
import { Unresolved, sssjgGimli } from '../DAL/ShowList';
import '../css/app.css';

const SplashPage = () => {
  return (
    <div className="splash-container container">
      <div className="epithet">
        <p>Bringing people together</p>
        <p>to create and play.</p>
        <p>Cactus Theatre Co was created</p>
        <p>in memory of our friend</p>
        <p>Daniel Gilmour,</p>
        <p>who left the world's stage too soon.</p>
      </div>
        <section>
          <Program
            showModel={Unresolved}
          />
        </section>
        <section>
          <Program
            showModel={sssjgGimli}
          />
        </section>
      </div>
  );
};

export default SplashPage;