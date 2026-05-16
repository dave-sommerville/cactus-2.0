import React, { useState } from 'react';
import Program from '../components/Program';
import { pastShows } from '../DAL/ShowList';

const PastShows = () => {
  const [selectedShow, setSelectedShow] = useState(pastShows[0] || null);

  return (
    <section className="past-shows">
      <h2>Past Shows</h2>
      <div className="past-show-links">
        {pastShows.map((show) => (
          <button
            key={show.title}
            type="button"
            className="btn"
            onClick={() => setSelectedShow(show)}
          >
            {show.title}
          </button>
        ))}
      </div>

      {selectedShow ? (
        <Program showModel={selectedShow} />
      ) : (
        <p>No past shows are available.</p>
      )}
    </section>
  );
};
export default PastShows;