import React, {useState} from 'react';
import Program from '../components/Program';
import { Unresolved, sssjgGimli } from '../DAL/ShowList';
import '../css/app.css';

const SplashPage = () => {
  const[showOneActive, setShowOneActive] = useState();
  const[showTwoActive, setShowTwoActive] = useState();

  const handleShowOneClick = () => {
    setShowOneActive(!showOneActive);
    if(showTwoActive) {
      setShowTwoActive(false);
    }
  }
  const handleShowTwoClick = () => {
    setShowTwoActive(!showTwoActive);
    if(showOneActive) {
      setShowOneActive(false);
    }
  }
  return (
    <>
    <div className="epithet">
      <p>Bringing people together</p>
      <p>to create and play.</p>
      <p>Cactus Theatre Co was created</p> 
      <p>in memory of our friend</p>
      <p>Daniel Gilmour,</p>
      <p>who left the world's stage too soon.</p>
    </div>
    <section>
      <Program showModel={Unresolved} />
    </section>
      <section>
      <Program showModel={sssjgGimli} />
    </section>
    </>
  );
};

export default SplashPage;