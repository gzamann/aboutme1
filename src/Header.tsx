import BlogList from "./BlogList"
import styles from './Header.module.css'

export const Header = () => {
    return <div className={styles.container}>
    <section className={styles.header}>
        <h1>Gulshan</h1>
        <div style={{marginTop: "8px"}}></div>
        <p>
          A frontend developer working with 5+ year of experience
          building modern web applications using React, Typescript, CSS and
          other frontend web tech.
          <br/>
          Currently working at <span className={styles.dfihighlight}><a href='https://www.dataforindia.com/' target='_blank'>Data For India</a></span>, helping advance people's understanding of India through data stories with visualizations.
        </p>
    </section>

    <section className={styles.section}>
        <h1>Projects</h1>
        <div className={styles.projectsGrid}>
          <a href="/desktop" className={styles.projectCard}>
            <div className={styles.projectThumbnail}>
              <div className={styles.desktopPreview}>
                <div className={styles.previewNavbar}></div>
                <div className={styles.previewIcons}>
                  <div className={styles.previewIcon}></div>
                  <div className={styles.previewIcon}></div>
                  <div className={styles.previewIcon}></div>
                </div>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>Interactive Desktop</h3>
              <p>A retro desktop-themed portfolio experience with draggable windows and icons</p>
            </div>
          </a>
        </div>
    </section>

    <section className={styles.section}>
        <h1>Blog</h1>
        <BlogList />
    </section>

    <section className={styles.section}>
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
    </section>
    </div>
}

export default Header