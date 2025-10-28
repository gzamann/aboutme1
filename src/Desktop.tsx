import React, { useRef, useEffect, useState } from 'react';
import FolderIcon from './FolderIcon';
import ProfileViewer from './ProfileViewer';
import { startIconDrag, startProfileDrag } from './utils/dragutils';
import Navbar from './Navbar';
import { ReactComponent as BookIcon } from './assets/icons/book1.svg';
import { ReactComponent as IntercomIcon } from './assets/icons/intercom.svg';
import BlogViewer from './BlogViewer';
import ContactExe from './ContactExe';
import WelcomeModal from './WelcomeModal';

export default function Desktop() {
  const [profileVisible, setProfileVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const iconRefs = useRef({});
  const profileRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const icons = [
    { id: 1, name: 'Profile', x: 50, y: 50 },
    { id: 2, name: 'Blog', x: 150, y: 50 },
    { id: 3, name: 'Contact', x: 50, y: 140 },
  ];

  return (
    <>
      <Navbar />
      <div className='desktop-area'>
        {icons.map((icon) => (
          <div
            key={icon.id}
            className='folder-icon'
            ref={(el) => (iconRefs.current[icon.id] = el)}
            style={{ left: icon.x, top: icon.y, position: 'absolute' }}
            onMouseDown={(e) =>
              startIconDrag(e, icon.id, iconRefs.current[icon.id])
            }
            onTouchStart={(e) =>
              startIconDrag(e, icon.id, iconRefs.current[icon.id])
            }
            onDoubleClick={() => {
              icon.name === 'Profile' && setProfileVisible(true);
              icon.name === 'Blog' && setBlogVisible(true);
              icon.name === 'Contact' && setContactVisible(true);
            }}
            onTouchEnd={(e) => {
              if (e.changedTouches.length === 1) {
                icon.name === 'Profile' && setProfileVisible(true);
                icon.name === 'Blog' && setBlogVisible(true);
                icon.name === 'Contact' && setContactVisible(true);
              }
            }}
          >
            {icon.name === 'Profile' && <FolderIcon />}
            {icon.name === 'Blog' && (
              <BookIcon style={{ height: '50px', width: '50px' }} />
            )}
            {icon.name === 'Contact' && (
              <IntercomIcon style={{ height: '50px', width: '50px' }} />
            )}
            <div>{icon.name}</div>
          </div>
        ))}
        {profileVisible && (
          <ProfileViewer
            profileRef={profileRef}
            setProfileVisible={setProfileVisible}
            startProfileDrag={startProfileDrag}
          />
        )}
        {blogVisible && (
          <BlogViewer
            blogRef={blogRef}
            setBlogVisible={setBlogVisible}
            startBlogDrag={startProfileDrag}
          />
        )}
        {contactVisible && (
          <ContactExe
            contactRef={contactRef}
            setContactVisible={setContactVisible}
            startContactDrag={startProfileDrag}
          />
        )}
      </div>
      <WelcomeModal 
        isVisible={welcomeVisible}
        onClose={() => setWelcomeVisible(false)}
      />
    </>
  );
}
