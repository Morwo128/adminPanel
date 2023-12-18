import React, { useState, useEffect } from "react";
import axios from "axios";

const PostScreen = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    axios
      .get("https://meditation-api-b34b74f3e544.herokuapp.com/api/v1/posts/")
      .then((item) => {
        console.log(item);
        // setPosts(item)
      })
      .catch((item) => {
        console.log(item);
      });
    // setPosts([
    //   {
    //     imageURL:
    //       "https://hostiq.ua/blog/wp-content/uploads/2021/08/what-is-url.png",
    //     title: "Volodymyr",
    //     text: "asdad",
    //     status: "rejected",
    //     user: {
    //       name: "John Doe",
    //       photo:
    //         "https://hostiq.ua/blog/wp-content/uploads/2021/08/what-is-url.png",
    //     },
    //   },
    //   {
    //     imageURL:
    //       "https://hostiq.ua/blog/wp-content/uploads/2021/08/what-is-url.png",
    //     title: "Volodymyr",
    //     text: "asdad",
    //     status: "approved",
    //     user: {
    //       name: "John Doe",
    //       photo:
    //         "https://hostiq.ua/blog/wp-content/uploads/2021/08/what-is-url.png",
    //     },
    //   },
    //   {
    //     imageURL:
    //       "https://hostiq.ua/blog/wp-content/uploads/2021/08/what-is-url.png",
    //     title: "Volodymyr",
    //     text: "asdad",
    //     status: "waitingForReview",
    //     user: {
    //       name: "John Doe",
    //       photo:
    //         "https://hostiq.ua/blog/wp-content/uploads/2021/08/what-is-url.png",
    //     },
    //   },
    //   // Додайте інші пости тут
    // ]);
  }, []);

  useEffect(() => {
    if (filterStatus === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.status === filterStatus);
      setFilteredPosts(filtered);
    }
  }, [filterStatus, posts]);

  const handleApprove = (index) => {
    const updatedPosts = [...filteredPosts];
    updatedPosts[index].status = "approved";
    setFilteredPosts(updatedPosts);
  };

  const handleReject = (index) => {
    const updatedPosts = [...filteredPosts];
    updatedPosts[index].status = "rejected";
    setFilteredPosts(updatedPosts);
  };

  return (
    <div className="post-container">
      <div className="filters">
        <button onClick={() => setFilterStatus("all")}>Усі пости</button>
        <button onClick={() => setFilterStatus("approved")}>Approved</button>
        <button onClick={() => setFilterStatus("rejected")}>Rejected</button>
        <button onClick={() => setFilterStatus("waitingForReview")}>
          Waiting
        </button>
      </div>
      <div className="posts-container">
        <div className="post-column">
          {filteredPosts.map(
            (post, index) =>
              index % 2 === 0 && (
                <div key={index} className="post">
                  <div className="post-status">{post.status}</div>
                  {post.status === "waitingForReview" && (
                    <div>
                      <button
                        onClick={() => handleApprove(index)}
                        style={{
                          marginRight: "5px",
                        }}
                      >
                        Approve
                      </button>
                      <button onClick={() => handleReject(index)}>
                        Reject
                      </button>
                    </div>
                  )}
                  <div className="user-info">
                    <img
                      src={post.user.photo}
                      alt={post.user.photo}
                      className="user-avatar"
                    />
                    <span className="user-name">{post.user.name}</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-text">{post.text}</p>
                  <img
                    src={post.imageURL}
                    alt={post.title}
                    className="post-image"
                  />
                </div>
              )
          )}
        </div>
        <div className="post-column">
          {filteredPosts.map(
            (post, index) =>
              index % 2 === 1 && (
                <div key={index} className="post">
                  <div className="post-status">{post.status}</div>
                  {post.status === "waitingForReview" && (
                    <div>
                      <button
                        onClick={() => handleApprove(index)}
                        style={{
                          marginRight: "5px",
                        }}
                      >
                        Approve
                      </button>
                      <button onClick={() => handleReject(index)}>
                        Reject
                      </button>
                    </div>
                  )}
                  <div className="user-info">
                    <img
                      src={post.user.photo}
                      alt={post.user.photo}
                      className="user-avatar"
                    />
                    <span className="user-name">{post.user.name}</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-text">{post.text}</p>
                  <img
                    src={post.imageURL}
                    alt={post.title}
                    className="post-image"
                  />
                </div>
              )
          )}
        </div>
      </div>
      <style jsx>{`
        .post-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 20px;
        }

        .posts-container {
          width: 80%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .post-column {
          flex: 1;
          max-width: 50%;
        }

        .post {
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 20px;
          margin: 20px;
          max-width: 100%;
        }

        .user-info {
          display: flex;
          align-items: center;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .user-name {
          font-weight: bold;
        }

        .post-title {
          font-size: 18px;
          margin: 10px 0;
        }

        .post-text {
          font-size: 14px;
        }

        .post-status {
          font-weight: bold;
          margin: 10px 0;
        }

        .post-image {
          max-width: 100%;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default PostScreen;
