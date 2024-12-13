import React from 'react';
import styles from "./Home.module.css";

function Home() {
  const posts = [
  {
    id: 1,
    user: "Aarav",
    avatar: "https://via.placeholder.com/40",
    time: "2 hours ago",
    content: "Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. ",
    hashtags: ["#NYC", "#Travel"],
    images: [
      "https://via.placeholder.com/300x200", 
      "https://via.placeholder.com/300x200"
    ],
    likes: 67,
  },
  {
    id: 2,
    user: "Sneha",
    avatar: "https://via.placeholder.com/40",
    time: "1 day ago",
    content: "Taking a moment to slow down, breathe, and focus on myself. Self-care isn’t selfish – it’s necessary.",
    hashtags: ["#SelfCare", "#MeTime", "#Wellness"],
    images: ["https://via.placeholder.com/300x200"],
    likes: 45,
  },
];

  return (
     <div className={styles.container}>
     <img className={styles.add}>{img</button>
      <header className={styles.top}>     
        <div className={styles.head}> 
        <img
          src="/dp.png"
          alt="User Avatar"
          className={styles.avatar}
        />
        <div>
          <p className={styles.welcome}>Welcome Back,</p>
          <h2 className={styles.username}>Sakshi Agarwal</h2>
          </div>
          </div>
          <div>   
          <button className={styles.menu}><img src="/menu.png" style={{width:"1rem"}}></img></button>
          </div>
      </header>

      {/* Feeds Section */}
      <h3 className={styles.feedTitle}>Feeds</h3>
      <div className={styles.posts}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postCard}>
          {/* User Info */}
          <div className={styles.userInfo}>
            <img
              src={post.avatar}
              alt={`${post.user} avatar`}
              className={styles.userAvatar}
            />
            <div className={styles.userDetails}>
              <p className={styles.userName}>{post.user}</p>
              <p className={styles.postTime}>{post.time}</p>
            </div>
            <button className={styles.menuButton}>⋮</button>
          </div>
            {/* Post Content */}
          <p className={styles.postContent}>{post.content}</p>
          <p className={styles.postHashtags}>{post.hashtags.join(" ")}</p>

          {/* Post Images */}
          <div className={styles.postImages}>
            {post.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Post content"
                className={styles.postImage}
              />
            ))}
          </div>

          {/* Post Actions */}
          <div className={styles.postActions}>
            <p className={styles.postLikes}>
              <span className={styles.likeIcon}>❤</span> {post.likes}
            </p>
            <button className={styles.shareButton}>Share</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home
