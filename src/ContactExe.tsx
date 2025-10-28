import React from 'react';

const ContactExe = ({ contactRef, setContactVisible, startContactDrag }) => {
  return (
    <div
      ref={contactRef}
      className='contact-viewer'
      style={{ left: '100px', top: '180px' }}
    >
      <div
        className='contact-header'
        onMouseDown={(e) => startContactDrag(e, contactRef.current)}
      >
        Contact Viewer
        <button className='close-btn' onClick={() => setContactVisible(false)}>
          ✕
        </button>
      </div>
      <div className='contact-content'>
        <h2>Contact Me</h2>
        <div className="contact-details">
          <p>
            Email:{' '}
            <a href="mailto:gulshanzamann@gmail.com">gulshanzamann@gmail.com</a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/gzamann" target="_blank" rel="noopener noreferrer">
              github.com/gzamann
            </a>
          </p>
          <p>
            Linktree:{' '}
            <a href="https://linktr.ee/gulshanwebdev" target="_blank" rel="noopener noreferrer">
              linktr.ee/gulshanwebdev
            </a>
          </p>
          <p>
            Dev.to:{' '}
            <a href="https://dev.to/gzamann" target="_blank" rel="noopener noreferrer">
              dev.to/gzamann
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/gulshanwebdev/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/gulshanwebdev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactExe;
