import React, { useState, useRef } from 'react';

const Program = () => {
  // Logic for toggling the Cast and Crew blocks
  const [activeSection, setActiveSection] = useState(null); // 'cast', 'crew', or null
  
  // Logic for individual bio expansions
  const [expandedBio, setExpandedBio] = useState({});

  const castRef = useRef(null);
  const crewRef = useRef(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
      // Smooth scroll logic from your original script
      const ref = section === 'cast' ? castRef : crewRef;
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

        <h2>The Siren Song of Stephen Jay Gould</h2>
        <h4>by Benjamin Bettenbender</h4>

        <div className="poster">
          <img src="./src/img/siren-song/poster.jpg" alt="Show Poster" />
        </div>

        <div className="program-wrapper">
          <div className="f-col fifty-w center">
            <h5>Synopsis</h5>
            <p>
              A man lands on a woman after trying to throw himself off a bridge in a botched suicide attempt...
              {/* Shortened for brevity, keep your full text here */}
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
                  <li>Friday, February 6, 2026 7:30 PM</li>
                  <li>Saturday, February 7, 2026 2:00 PM</li>
                  <li>Saturday, February 7, 2026 7:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-wrapper f-col">
          <a href="https://eventbrite.ca/..." target="_blank" rel="noreferrer" className="btn coming-soon">
            Purchase Tickets
          </a>  
          <a href="/photo-gallery.html" className="btn coming-soon">
            Photo Gallery
          </a> 

          <figure className="flex">
            <img 
              className="cast-photo" 
              src="./src/img/siren-song/Cast & Crew.PNG" 
              alt="Cast and Crew" 
            />
          </figure>

          <div className="button-wrapper siren">
            <button 
              className={`cast-btn ${activeSection === 'cast' ? 'active' : ''}`} 
              onClick={() => toggleSection('cast')}
            >
              Cast
            </button>
            <button 
              className={`crew-btn ${activeSection === 'crew' ? 'active' : ''}`} 
              onClick={() => toggleSection('crew')}
            >
              Crew
            </button>
          </div>

          {/* Cast Section */}
          <div ref={castRef} className={`cast ${activeSection === 'cast' ? '' : 'collapse'}`}>
            <figure className="eve-btn" onClick={() => toggleBio('eve')}>
              <img src="./src/img/siren-song/eve-ross.jpg" alt="Eve Ross Moore" />
              <figcaption>Eve Ross Moore</figcaption>
            </figure>
            <article className={`eve ${expandedBio['eve'] ? '' : 'collapse'}`}>
              <p>Eve Ross Moore is thrilled to be a part of this year's Little Theatre Festival...</p>
            </article>

            <figure className="dave-btn" onClick={() => toggleBio('dave')}>
              <img src="./src/img/siren-song/dave-pruden.jpg" alt="Dave Pruden" />
              <figcaption>Dave Pruden</figcaption>
            </figure>
            <article className={`dave ${expandedBio['dave'] ? '' : 'collapse'}`}>
              <p>Dave Pruden, a graphic artist/pressman by day...</p>
            </article>
          </div>

          {/* Crew Section */}
          <div ref={crewRef} className={`crew ${activeSection === 'crew' ? '' : 'collapse'}`}>
            <figure className="hope-btn" onClick={() => toggleBio('hope')}>
              <img src="./src/img/siren-song/hope-figueroa.jpg" alt="Hope Figueroa" />
              <figcaption>Hope Figueroa</figcaption>
              <p>Director</p>
            </figure>
            <article className={`hope ${expandedBio['hope'] ? '' : 'collapse'}`}>
              <p>Hope Figueroa (she/her) is an actor, improviser, and Arts Education advocate...</p>
            </article>

            <figure className="steph-btn" onClick={() => toggleBio('steph')}>
              <img src="./src/img/siren-song/steph-blanchette.jpg" alt="Steph Blanchette" />
              <figcaption>Steph Blanchette</figcaption>
              <p>Artistic Director / Stage Manager</p>
            </figure>
            <article className={`steph ${expandedBio['steph'] ? '' : 'collapse'}`}>
              <p>Steph Blanchette is the founder of Cactus Theatre Co...</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Program;