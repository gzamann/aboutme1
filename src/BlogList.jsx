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
        <section className={styles['post-list']} ref={carouselRef}>
            {postList.map(post => {
                return <div class="blog-card">
                    <div class="blog-card-tags">{post.tag_list[0]}</div>
                    <div class="blog-card-thumbnail">
                        <img src={post.social_image} alt={post.title} />
                    </div>
                    <div class="blog-card-content">
                        <a href={post.canonical_url} target="_blank" rel="noopener noreferrer"><div class="blog-card-title">{post.title}</div></a>
                        <div class="blog-card-desc">{post.description}</div>
                    </div>
                    <p class="blog-card-time">{post.readable_publish_date}</p>
                </div>
            })}
        </section>
    </div>
}

export default BlogList