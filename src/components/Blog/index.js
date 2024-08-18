import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const BlogList = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const query = `query Publication {
        publication(host:"subhrajit.hashnode.dev") {
            posts(first:10) {
                edges {
                    node {
                        coverImage {
                            url
                        }
                        title
                        brief
                        url
                    }
                }
            }
        }
    }`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });
        const result = await response.json();
        const postsData = result.data.publication.posts.edges;
        setPosts(postsData);
        setLoading(false);
    };

    const renderBlogs = (posts) => {
        return (
            <div className="images-container">
                {
                    posts.map((c, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                {c.node.coverImage.url && (
                                    <img 
                                        src={c.node.coverImage.url}
                                        className="portfolio-image"
                                        alt="blog-cover"
                                    />
                                )}
                                <div className="content">
                                    <p className="title">{c.node.title}</p>
                                    {/* <h4 className="description">{c.node.brief}</h4> */}
                                    <button
                                        className="btn"
                                        onClick={() => window.open(c.node.url)}
                                    >Read More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Blogs".split("")}
                        idx={15}
                    />
                </h1>
                <div>{loading ? <p>Loading...</p> : renderBlogs(posts)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default BlogList;
