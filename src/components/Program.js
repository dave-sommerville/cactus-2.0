import React, { useState, useRef } from 'react';
import {currentShow} from '../DAL/ShowList';
import PersonProfile from '../components/PersonProfile';

const Program = () => {
  // Logic for toggling the Cast and Crew blocks
  const [isCastOpen, setIsCastOpen] = useState(false);
  const [isCrewOpen, setIsCrewOpen] = useState(false);
  
  // Logic for individual bio expansions
  const [expandedBio, setExpandedBio] = useState({});

  const castRef = useRef(null);
  const crewRef = useRef(null);

  const openCast = () => {
    const isOpening = !isCastOpen;
    setIsCastOpen(isOpening);
    setIsCrewOpen(false);

    if (isOpening) {
      setTimeout(() => {
        castRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const openCrew = () => {
    const isOpening = !isCrewOpen;
    setIsCrewOpen(isOpening);
    setIsCastOpen(false);

    if (isOpening) {
      setTimeout(() => {
        crewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const toggleBio = (name) => {
    setExpandedBio(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <main className="container">
      <section className="program">
        <div className="epithet">
          <p>Bringing people together</p>
          <p>to create and play.</p>
          <p>Cactus Theatre Co was created</p> 
          <p>in memory of our friend</p>
          <p>Daniel Gilmour,</p>
          <p>who left the world's stage too soon.</p>
        </div>

        <h2>{currentShow.title}</h2>
        <h4>by {currentShow.author}</h4>

        <div className="poster">
          {currentShow && currentShow.coverPhoto ? (
            <img src={currentShow.coverPhoto} alt={`Show Poster for ${currentShow.title}`} />
          ) : null}
        </div>

        <div className="program-wrapper">
          <div className="f-col fifty-w center">
            <h5>Synopsis</h5>
            <p>
              {currentShow.synopsis}
            </p>
          </div>

          <div className="f-col fifty-w center">
            <div className="f-col center">
              <div className="location">
                <span>Irish Association of Manitoba</span>
                <span className="dash"> - </span>
                <span>654 Erin Street</span>
              </div>
              <h4>Dates and Times</h4>
              <div className="dates-wrapper flex">
                <ul>
                  {currentShow.dateTimes && currentShow.dateTimes.length > 0 ? (
                    currentShow.dateTimes.map((time, index) => (
                      <li key={index}>{time}</li>
                    ))
                  ) : (
                      <li>Times available soon</li>
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-wrapper f-col">
          {currentShow.ticketLink && currentShow.ticketLink !== '' &&
          <a href={currentShow.ticketLink} target="_blank" rel="noreferrer" className="btn coming-soon">
            Purchase Tickets
          </a>  
          }
          {currentShow.mediaKitLink && currentShow.mediaKitLink !== '' &&
          <a href={currentShow.mediaKitLink} target="_blank" rel="noreferrer" className="btn coming-soon">
            Media Kit
          </a>  
          }
          {currentShow.reviewsLink && currentShow.reviewsLink !== '' &&
          <a href={currentShow.reviewsLink} target="_blank" rel="noreferrer" className="btn coming-soon">
            Reviews
          </a>  
          }
          {currentShow.galleryLink && currentShow.galleryLink !== '' &&
          <a href={currentShow.galleryLink} target="_blank" rel="noreferrer" className="btn coming-soon">
            Photo Gallery
          </a>  
          }
        </div>
          <figure className="flex">
            <img 
              className="cast-photo" 
              src="./src/img/siren-song/Cast & Crew.PNG" 
              alt="Cast and Crew" 
            />
          </figure>

        <div className="button-wrapper siren">
          <button 
            className={`cast-btn ${isCastOpen ? 'active' : ''}`} 
            onClick={openCast}
          >
            Cast
          </button>
          <button 
            className={`crew-btn ${isCrewOpen ? 'active' : ''}`} 
            onClick={openCrew}
          >
            Crew
          </button>
        </div>

        {/* Unified Cast Section */}
        <div ref={castRef} className={`cast ${isCastOpen ? '' : 'collapse'}`}>
          {currentShow.castList.map((person, index) => (
            <PersonProfile key={index} person={person} />
          ))}
        </div>

        {/* Unified Crew Section */}
        <div ref={crewRef} className={`crew ${isCrewOpen ? '' : 'collapse'}`}>
          {currentShow.crewList.map((person, index) => (
            <PersonProfile key={index} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Program;