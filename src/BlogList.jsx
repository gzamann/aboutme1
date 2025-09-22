import { useEffect, useState } from "react"

export const Header = () => {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles?username=gzamann')
            .then(res => res.json())
            .then(result => setPostList(result.slice(0, 4)))
    }, [])

    if (!postList.length) return <></>

    return <>
        <section class='post-list'>
            {postList.map(post => {
                return <div class='post-list-item'>
                    <div>
                        <p>{post.readable_publish_date} {new Date(post.published_at).getFullYear()}</p>
                    </div>
                    <img src={post.social_image} />
                    <div>
                        <p>
                            {post.description}
                        </p>
                    </div>
                    <div class="read-post"><a href={post.canonical_url} target="_blank">READ</a></div>
                </div>
            })}
        </section>
    </>
}

export default Header