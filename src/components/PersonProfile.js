import React, { useState } from 'react';

const PersonProfile = ({ person }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const titleLines = Array.isArray(person?.title) ? person.title.filter(Boolean) : person?.title ? [person.title] : [];

  // If there's no person data, don't render anything
  if (!person) return null;

  return (
    <div className="person-profile">
      <figure 
        className="profile-trigger" 
        onClick={(event) => {
          event.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        style={{ cursor: 'pointer' }}
      >
        {/* Only render image if headShot is not null */}
        {person.headShot && (
          <img src={person.headShot} alt={`Photo of ${person.personName}`} />
        )}
        
        <figcaption>{person.personName}</figcaption>
        
        {/* Only render title if it exists */}
        {titleLines.length > 0 && (
          <div className="job-title">
            {titleLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
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