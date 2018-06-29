import React from 'react'
import { withRouteData, Link } from 'react-static'
// @todo #1:30min remove Post page

export default withRouteData(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))
