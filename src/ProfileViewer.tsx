import React from 'react';
import TechIcon from './TechIcon';

const ProfileViewer = ({ profileRef, setProfileVisible, startProfileDrag }) => {
  return (
    <div
      ref={profileRef}
      className='profile-viewer'
      style={{ left: '100px', top: '150px' }}
    >
      <div
        className='profile-header'
        onMouseDown={(e) => startProfileDrag(e, profileRef.current)}
        onTouchStart={(e) => startProfileDrag(e, profileRef.current)}
      >
        Profile Viewer
        <button className='close-btn' onClick={() => setProfileVisible(false)}>
          ✕
        </button>
      </div>
      <div className='profile-content'>
        <p>Gulshan</p>
        <p>Frontend Developer</p>
        <p>Bengaluru, KA, India</p>
        <hr />
        <p>
          A frontend developer working with 5+ year of experience
          building modern web applications using React, Typescript, CSS and
          other frontend web tech.
          <br/>
          Currently working at <span className='dfihighlight'><a href='https://www.dataforindia.com/' target='_blank'>Data For India</a></span>, helping advance people's understanding of India through data stories with visualizations.
        </p>
      </div>
    </div>
  );
};

export default ProfileViewer;
