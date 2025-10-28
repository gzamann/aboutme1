import React, { useState, useEffect } from 'react';

const BlogViewer = ({ blogRef, setBlogVisible, startBlogDrag }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=gzamann')
      .then(res => res.json())
      .then(result => setPostList(result.slice(0, 6)));
  }, []);

  return (
    <div
      ref={blogRef}
      className='blog-viewer'
      style={{ left: '80px', top: '220px' }}
    >
      <div
        className='blog-header'
        onMouseDown={(e) => startBlogDrag(e, blogRef.current)}
        onTouchStart={(e) => startBlogDrag(e, blogRef.current)}
      >
        Blog Viewer
        <button className='close-btn' onClick={() => setBlogVisible(false)}>
          ✕
        </button>
      </div>
      <div className='blog-content'>
        <h2>Recent Posts</h2>
        {postList.map(post => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p className="date">
              {post.readable_publish_date} {new Date(post.published_at).getFullYear()}
            </p>
            {post.social_image && (
              <img 
                src={post.social_image} 
                alt={post.title}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  marginTop: '8px'
                }} 
              />
            )}
            <p className="description">{post.description}</p>
            <a 
              href={post.canonical_url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '8px',
                color: '#36353c',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              READ ARTICLE →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogViewer;