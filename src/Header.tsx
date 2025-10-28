import BlogList from "./BlogList"
import styles from './Header.module.css'

export const Header = () => {
    return <div className={styles.container}>
    {/* <div className={styles.navbar}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Blog</li>
        </ul>
    </div> */}
    <section className={styles.header}>
        <h1>Gulshan</h1>
        <p>
          A frontend developer working with 5+ year of experience
          building modern web applications using React, Typescript, CSS and
          other frontend web tech.
          <br/>
          Currently working at <span className={styles.dfihighlight}><a href='https://www.dataforindia.com/' target='_blank'>Data For India</a></span>, helping advance people's understanding of India through data stories with visualizations.
        </p>
    </section>
    {/* <section>
        <h1>Work</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </section> */}
    <section className={styles.section}>
        <h1>Blog</h1>
        <BlogList />
    </section>
    <section className={styles.section}>
        <h1>Contact</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </section>
    </div>
}

export default Header