import React, {useState} from 'react';
import Program from '../components/Program';
import { Unresolved, sssjgGimli } from '../DAL/ShowList';
import '../css/app.css';

const SplashPage = () => {
  const [activeShowId, setActiveShowId] = useState(null);

  const handleShowClick = (showId) => {
    setActiveShowId((prev) => (prev === showId ? null : showId));
  };

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
      <div className={`show-panels ${activeShowId ? 'show-active' : ''}`}>
        <section
          role="button"
          tabIndex={0}
          className={`show-section ${activeShowId === 'one' ? 'active' : activeShowId ? 'inactive' : 'default'}`}
          onClick={() => handleShowClick('one')}
        >
          <Program
            showModel={Unresolved}
            displayMode={activeShowId === 'one' ? 'active' : activeShowId ? 'inactive' : 'default'}
          />
        </section>
        <section
          role="button"
          tabIndex={0}
          className={`show-section ${activeShowId === 'two' ? 'active' : activeShowId ? 'inactive' : 'default'}`}
          onClick={() => handleShowClick('two')}
        >
          <Program
            showModel={sssjgGimli}
            displayMode={activeShowId === 'two' ? 'active' : activeShowId ? 'inactive' : 'default'}
          />
        </section>
      </div>
    </div>
  );
};

export default SplashPage;