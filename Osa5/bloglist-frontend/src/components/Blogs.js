import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogit => setBlogs(blogit))
  }, [])

  const blogFormRef = React.createRef()

  const addBlog = () => {
    blogService.getAll().then(blogit => setBlogs(blogit))
    blogFormRef.current.toggleVisibility()
  }

  const blogForm = () => {
    return (
      <Togglable
        buttonLabel="New Blog"
        ref={blogFormRef}>
        <BlogForm
          onSubmit={addBlog}
        />
      </Togglable>
    )
  }
  const user = window.localStorage.getItem('loggedinUser')


  //blogs.sort((a, b) => b.likes - a.likes)

  return (
    <main className="blogs">
      {user !== null && blogForm()}
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
    </main>

  )
}

export default Blogs