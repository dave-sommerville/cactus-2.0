import React, { useState } from 'react';

const PersonProfile = ({ person }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If there's no person data, don't render anything
  if (!person) return null;

  return (
    <div className="person-profile">
      <figure 
        className="profile-trigger" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: 'pointer' }}
      >
        {/* Only render image if headShot is not null */}
        {person.headShot && (
          <img src={person.headShot} alt={`Photo of ${person.personName}`} />
        )}
        
        <figcaption>{person.personName}</figcaption>
        
        {/* Only render title if it exists */}
        {person.title && <p className="job-title">{person.title}</p>}
      </figure>

      {/* Bio section - only renders if bio exists AND is toggled open */}
      {person.bio && (
        <article className={`bio-content ${isExpanded ? '' : 'collapse'}`}>
          <p>{person.bio}</p>
        </article>
      )}
    </div>
  );
};

export default PersonProfile;