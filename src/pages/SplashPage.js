import React, {useState} from 'react';
import Program from '../components/Program';
import { Unresolved, sssjgGimli } from '../DAL/ShowList';
import otherShows from '../media/graphics/other-shows.jpeg';
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
      <div className="w-500px t-cen mb-25px">
        <p>This play deals with the topic of suicide. If you or someone you know are in need of support please reach out.</p>
        <a href="https://988.ca/" target="_blank" rel="noreferrer">Suicide Crisis Hotline</a> 
        <p>988 - Call or Text</p>
      </div>
      <div className="w-500px t-cen mb-25px">
        <p>
          A heartfelt thank you to the following people for their contributions to this production:
        </p>
        <p> 
          Dustin Jackson (lights), Kathleen Armstrong, Kolleen Karlowsky-Clark and Chris Bishopp (costumes), Lloyd Cohen, Heather Forgie, Kevin Birkholz, Daniel Suderman and Dan Blanchette (sets)
        </p>
      </div>
      <img src={otherShows} className="other-shows"/>
    </div>
  );
};

export default SplashPage;