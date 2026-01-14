import { useEffect, useState, useRef } from "react"
import styles from './BlogList.module.css'

export const BlogList = () => {
    const [postList, setPostList] = useState([])
    const carouselRef = useRef(null)

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=gzamann')
            .then(res => res.json())
            .then(result => setPostList(result.slice(0, 6)))
    }, [])

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 360
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    if (!postList.length) return <></>

    return <div className={styles.carouselContainer}>
        <button
            className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
        >
            &#8249;
        </button>
        <section className={styles['post-list']} ref={carouselRef}>
            {postList.map(post => {
                return <div className={styles['post-list-item']} key={post.id}>
                    <div>
                        <p>{post.readable_publish_date}</p>
                    </div>
                    <img src={post.social_image} alt={post.title} />
                    <div>
                        <p>
                            {post.description}
                        </p>
                    </div>
                    <div className={styles['read-post']}><a href={post.canonical_url} target="_blank" rel="noopener noreferrer">READ</a></div>
                </div>
            })}
        </section>
        <button
            className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
        >
            &#8250;
        </button>
    </div>
}

export default BlogList