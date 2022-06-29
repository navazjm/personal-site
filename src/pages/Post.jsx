import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import postsData from "../data/Blog/Posts.json";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import "../styles/Post.css";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";
import { NotFound } from "./NotFound";

export const Post = (props) => {
    const validId = parseInt(props.match.params.id);
    let fetchedPost = {};
    let postExists = false;
    postsData.forEach((post) => {
        if (validId === post.id) {
            fetchedPost = post;
            postExists = true;
        }
    });
    if (!postExists) {
        return <NotFound />;
    }

    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        const loadPostContent = async () => {
            const markdownFile = await import(
                `../data/Blog/Posts/${fetchedPost.markdown_file}`
            );
            setPostContent(markdownFile.html);
            // const markdownFileText = await fetch(markdownFile.default);
            // const markdownFileContent = await markdownFileText.text();
            // setPostContent(markdownFileContent.toString());
        };

        loadPostContent();
    });

    return (
        <div className="container">
            <div className="page-heading-container post-page-heading-container">
                <div className="post-page-back-arrow-container">
                    <NavLink
                        exact
                        to="/blog"
                        className="post-page-back-arrow-btn"
                    >
                         Back
                    </NavLink>
                </div>
                <div className="post-page-heading-content">
                    <h1>{fetchedPost.title}</h1>
                    <p className="post-page-created-at">
                        Published: {fetchedPost.created_at}
                    </p>
                </div>
            </div>
            <div className="post-page-content-container">
                {fetchedPost.image && (
                    <img
                        src={fetchedPost.image}
                        className="post-page-post-image"
                    />
                )}
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {postContent}
                </ReactMarkdown>
            </div>
            <div className="post-page-post-footer-container">
                {fetchedPost.topics.map((topic, index) => (
                    <div key={index} className="post-page-topic">
                        #{topic}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

Post.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    id: PropTypes.string,
};
