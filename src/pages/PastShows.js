import React, { useState } from 'react';
import Program from '../components/Program';
import { pastShows } from '../DAL/ShowList';

const PastShows = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <section className="past-shows">
      <h2>Past Shows</h2>
      <div className="past-show-links">
        {pastShows.map((show) => (
          <button
            key={show.title}
            type="button"
            className={`btn ${selectedShow === show ? 'active' : ''}`}
            onClick={() => setSelectedShow(show)}
          >
            {show.title}
          </button>
        ))}
      </div>

      {selectedShow ? (
        <Program showModel={selectedShow} displayMode="active" />
      ) : (
        <p className="past-show-placeholder">Select a past show above to see full details.</p>
      )}
    </section>
  );
};
export default PastShows;