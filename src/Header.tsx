import BlogList from "./BlogList"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react';
import {ReactComponent as Satellite} from './assets/icons/1F6F0.svg';
import {ReactComponent as Github} from './assets/icons/github.svg';
import {ReactComponent as Dev} from './assets/icons/dev-badge.svg';
import {ReactComponent as Linkedin} from './assets/icons/linkedin.svg';
import {ReactComponent as Linktree} from './assets/icons/linktree.svg';
import {ReactComponent as Mail} from './assets/icons/mail.svg';
import {ReactComponent as Meteor} from './assets/icons/2604.svg';
import {ReactComponent as Speech} from './assets/icons/speech.svg';
import {ReactComponent as Feather} from './assets/icons/1FAB6.svg';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);


export const Header = () => {
  const container = useRef(null);
  useGSAP(() => {
    gsap
      .timeline({
        delay: 1,
        repeat: -1
      })
      .to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "CSS",
          // chars: "uppercase"
        }
      })
      .to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "Typescript",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "Nextjs",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "Chartjs",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "Echarts",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "GraphQL",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "Redux",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "Javascript",
          chars: "lowercase"
        }
      }).to("#text", 1, {
        delay: 1,
        scrambleText: {
          text: "HTML",
          chars: "lowercase"
        }
      });
  }, { scope: container }); // <-- scope is for selector text (optional)

  return <><div className="main-content">
    <section className="intro-section">
      <h1>Gulshan</h1>
      <div style={{ marginTop: "8px" }}></div>
      <p className="text-content" ref={container}>
        A front-end developer having 6+ years of experience building modern web applications using <div id="text">React</div> and
        other web tech.
        <br />
        Currently at <span className="dfihighlight"><a href='https://www.dataforindia.com/' target='_blank'>Data For India</a></span>, where we are helping advance people's understanding of India through data and visualizations.
      </p>
    </section>

    <section className="blog-section">
      <h2>Blog</h2>
      <BlogList />
    </section>
  </div>
    <footer className="footer">
      <span className="footer-setallite">
        <Satellite />
      </span>
      {/* <span className="footer-meteor">
        <Meteor />
      </span> */}
      <h1>Reach out</h1>
      <p>Feel free to reach out for collaboration or to talk about CSS!</p>
      <div style={{marginBottom: "16px"}}></div>
      <div className="footer-links">
        {/* <a href="mailto:gulshanzamann@gmail.com">
          <Mail />
        </a> */}
        <a href="https://www.linkedin.com/in/gulshanwebdev/" target="_blank" rel="noopener noreferrer">
        <Linkedin />
        </a>
        <a href="https://github.com/gzamann" target="_blank" rel="noopener noreferrer">
        <Github />
        </a>
        <a href="https://dev.to/gzamann" target="_blank" rel="noopener noreferrer">
        <Dev />
        </a>
        <a href="https://linktr.ee/gulshanwebdev" target="_blank" rel="noopener noreferrer">
        <Linktree />
        </a>
      </div>
    </footer>
  </>
}

export default Header