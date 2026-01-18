import BlogList from "./BlogList"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react';

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

  return <div className="main-content">
    <section className="intro-section">
      <h1>Gulshan</h1>
      <div style={{ marginTop: "8px" }}></div>
      <p className="text-content" ref={container}>
        A front-end developer having 6+ years of experience building modern web applications using <div id="text">React</div> and
        other front-end web tech.
        <br />
        Currently working at <span className="dfihighlight"><a href='https://www.dataforindia.com/' target='_blank'>Data For India</a></span>, where we are helping advance people's understanding of India through data and visualizations.
      </p>
    </section>

    <section className="blog-section">
        <h2>Writings</h2>
        <BlogList />
    </section>

    {/* <section className={styles.section}>
        <h1>Contact</h1>
        <div className={styles.contactCard}>
          <p className={styles.contactIntro}>Feel free to reach out for collaboration, questions, or just to say hello!</p>
          <div className={styles.contactLinks}>
            <a href="mailto:gulshanzamann@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <span>gulshanzamann@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/gulshanwebdev/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>in</span>
              <span>linkedin.com/in/gulshanwebdev</span>
            </a>
            <a href="https://github.com/gzamann" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>gh</span>
              <span>github.com/gzamann</span>
            </a>
            <a href="https://dev.to/gzamann" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>dev</span>
              <span>dev.to/gzamann</span>
            </a>
            <a href="https://linktr.ee/gulshanwebdev" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>lnk</span>
              <span>linktr.ee/gulshanwebdev</span>
            </a>
          </div>
        </div>
    </section> */}
  </div>
}

export default Header