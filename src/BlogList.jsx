import { useEffect, useState, useRef } from "react"
import styles from './BlogList.module.css'

export const BlogList = () => {
    const [postList, setPostList] = useState([])
    const carouselRef = useRef(null)

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=gzamann')
            .then(res => res.json())
            .then(result => setPostList(result.slice(0, 99)))
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
        <section className={styles['post-list']} ref={carouselRef}>
            {postList.map(post => {
                return <a className='blog-card-link' href={post.canonical_url} target="_blank" rel="noopener noreferrer">
                    <div class="blog-card">
                    <div class="blog-card-thumbnail">
                        <img src={post.social_image} alt={post.title} />
                    </div>
                    <div className="blog-card-tags">{post.tag_list[0]}</div>
                    <div className="blog-card-content">
                            <div className="blog-card-title">{post.title}</div>
                        <div className="blog-card-desc">{post.description}</div>
                        <p class="blog-card-time">{post.readable_publish_date}</p>
                    </div>
                </div>
                </a>
            })}
        </section>
    </div>
}

export default BlogList