import { useEffect, useState } from "react"
import styles from './BlogList.module.css'

export const BlogList = () => {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles?username=gzamann')
            .then(res => res.json())
            .then(result => setPostList(result.slice(0, 4)))
    }, [])

    if (!postList.length) return <></>

    return <>
        <section className={styles['post-list']}>
            {postList.map(post => {
                return <div className={styles['post-list-item']} key={post.id}>
                    <div>
                        <p>{post.readable_publish_date} {new Date(post.published_at).getFullYear()}</p>
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
    </>
}

export default BlogList