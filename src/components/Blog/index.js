import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const BlogList = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

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
    }`

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    const result = await response.json()
    const postsData = result.data.publication.posts.edges
    setPosts(postsData)
    setLoading(false)
  }

  const renderBlogs = (posts) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 p-6">
          {posts.map((c, idx) => (
            <div
              key={idx}
              onClick={() => window.open(c.node.url)}
              className="rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {c.node.coverImage.url && (
                <img
                  src={c.node.coverImage.url}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt="blog-cover"
                />
              )}
              <div className="p-6 bg-sky-950">
                <p className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {c.node.title}
                </p>
                {/* <h4 className="text-gray-600 text-sm">{c.node.brief}</h4> */}
              </div>
            </div>
          ))}
        </div>
      );
      
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Blogs'.split('')}
            idx={15}
          />
        </h1>
        <div>{loading ? <p>Loading...</p> : renderBlogs(posts)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default BlogList
