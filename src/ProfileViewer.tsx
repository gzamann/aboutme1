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
      >
        Profile Viewer
        <button className='close-btn' onClick={() => setProfileVisible(false)}>
          ✕
        </button>
      </div>
      <div className='profile-content'>
        <p>Name: Gulshan (aka Mr Holmes)</p>
        <p>Role: Frontend Developer</p>
        <p>Location: Bengaluru, KA, India</p>
        <hr />
        <p>
          About: A frontend developer working with 5+ year of experience
          building modern web applications using React, Typescript, CSS and
          other frontend web tech.
        </p>
        {/* <hr />
        <p>
          Tech Experience:
        </p>
        <div className="tech-list">
          <ul>
            <li>
              <TechIcon iconName="React" color="#61DAFB" />
              React
            </li>
            <li>
              <TechIcon iconName="Typescript" color="blue" />
              Typescript
            </li>
            <li>
              <TechIcon iconName="CSS" color="yellow" />
              CSS
            </li>
            <li>
              <TechIcon iconName="HTML" color="orange" />
              HTML
            </li>
            <li>
              <TechIcon iconName="Echarts" color="#FF6F20" />
              Echarts
            </li>
            <li>
              <TechIcon iconName="ChartJS" color="#FF6384" />
              ChartJS
            </li>
            <li>
              <TechIcon iconName="Github" color="#333" />
              Github
            </li>
            <li>
              <TechIcon iconName="Vite" color="#646CFF" />
              Vite
            </li>
            <li>
              <TechIcon iconName="Figma" color="#F24E1E" />
              Figma
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileViewer;
