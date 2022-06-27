import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import BlogPostData from "../data/Blog/Posts.json";
import "../styles/Blog.css";

export const Blog = () => {
    const uniqueFeaturedTopics = new Set();
    BlogPostData.forEach((post) => {
        post.topics.forEach((topic) => {
            uniqueFeaturedTopics.add(topic);
        });
    });
    // have to convert set to array to use .map when rendering
    const featuredTopics = [...uniqueFeaturedTopics];

    const [searchTerm, setSearchTerm] = useState("");
    const [prevSearchTerm, setPrevSearchTerm] = useState("");
    const formElement = useRef();

    const highlightFormContainer = () => {
        formElement.current.classList.toggle("focused");
    };

    const [posts, setPosts] = useState(BlogPostData);

    const filterPosts = (event) => {
        event.preventDefault();

        setPrevSearchTerm(searchTerm);

        if (searchTerm[0] === "#") {
            // filter by topics
            const searchTermWithoutHashtag = searchTerm.slice(1);
            const lowerSearchTerm = searchTermWithoutHashtag.toLowerCase();
            filterPostsByTopic(lowerSearchTerm);
        } else {
            // filter by title
            const selectedPosts = [];
            BlogPostData.forEach((post) => {
                const lowerSearchTerm = searchTerm.toLowerCase();
                const lowerPostTitle = post.title.toLowerCase();
                if (lowerPostTitle.includes(lowerSearchTerm)) {
                    selectedPosts.push(post);
                }
            });
            setPosts(selectedPosts);
        }

        setSearchTerm("");
    };

    const clearSearchResults = () => {
        setSearchTerm("");
        setPrevSearchTerm("");
        setPosts(BlogPostData);
    };

    const filterPostsByTopic = (searchValue) => {
        if (!prevSearchTerm || prevSearchTerm !== searchValue)
            setPrevSearchTerm(`#${searchValue}`);
        const selectedPosts = [];
        BlogPostData.forEach((post) => {
            post.topics.forEach((topic) => {
                const lowerTopic = topic.toLowerCase();
                if (lowerTopic.includes(searchValue)) {
                    selectedPosts.push(post);
                }
            });
        });
        setPosts(selectedPosts);
    };

    return (
        <div className="container">
            <div className="page-heading-container blog-page-heading">
                <h1>Recently Published</h1>
                {BlogPostData.length > 0 && (
                    <form
                        className="blog-search-form"
                        tabIndex={0}
                        ref={formElement}
                        onSubmit={filterPosts}
                    >
                        <input
                            type="text"
                            className="blog-search-input"
                            placeholder="Search Posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={highlightFormContainer}
                            onBlur={highlightFormContainer}
                        />
                        <button></button>
                    </form>
                )}
            </div>
            <div className="blog-page-content-container">
                <div className="blog-page-posts-container">
                    {prevSearchTerm && (
                        <div className="blog-page-clear-search">
                            Showing results for &quot;{prevSearchTerm}&quot;
                            <span
                                className="blog-page-clear-search-btn"
                                onClick={clearSearchResults}
                            >
                                clear 
                            </span>
                        </div>
                    )}
                    {posts.length > 0 ? (
                        posts.map((post, i) => (
                            <NavLink
                                key={i}
                                className="blog-page-post-container"
                                to={`/blog/${post.id}`}
                            >
                                <div className="blog-page-post-heading">
                                    <h2>{post.title}</h2>
                                    <p>{post.created_at}</p>
                                </div>
                                <div className="blog-page-post-description">
                                    <p>{post.description}</p>
                                </div>
                                <div className="blog-page-post-topics-container">
                                    {post.topics.map((topic, index) => (
                                        <div
                                            key={index}
                                            className="blog-page-post-topic"
                                        >
                                            #{topic}
                                        </div>
                                    ))}
                                </div>
                            </NavLink>
                        ))
                    ) : (
                        <div className="blog-page-no-posts">
                            <h3>No Posts Found!</h3>
                        </div>
                    )}
                </div>
                <div className="blog-page-topics-container">
                    {posts.length > 0 && (
                        <>
                            <h3>Featured Topics</h3>
                            <div className="blog-page-topics-list-container">
                                {featuredTopics.map((topic, index) => (
                                    <div
                                        className="blog-page-topic"
                                        key={index}
                                        tabIndex={0}
                                        onClick={() => {
                                            filterPostsByTopic(
                                                `${topic.toLowerCase()}`
                                            );
                                        }}
                                    >
                                        #{topic}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
