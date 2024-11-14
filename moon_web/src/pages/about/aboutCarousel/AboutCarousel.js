import React, { useState, useEffect, useCallback } from 'react';
import './aboutCarousel.css';

export default function AboutCarousel({ profiles, autoRotateInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profilesToShow = 3;

  const nextProfile = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + profilesToShow) % profiles.length
    );
  }, [profiles.length, profilesToShow]);

  const prevProfile = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - profilesToShow + profiles.length) % profiles.length
    );
  };

  const visibleProfiles = profiles.slice(currentIndex, currentIndex + profilesToShow).concat(
    profiles.slice(0, Math.max(0, (currentIndex + profilesToShow) - profiles.length))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      nextProfile();
    }, autoRotateInterval);

    return () => clearInterval(interval); 
  }, [nextProfile, autoRotateInterval]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevProfile}>◀</button>
      <div className="carousel-profiles">
        {visibleProfiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-image" />
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-role">{profile.role}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextProfile}>▶</button>
    </div>
  );
}
