import getPostMetadata from '@/components/getPostMetadata'
import React from 'react'
import AllPosts from '@/components/AllPosts'

const Blog = () => {

  const datedPosts = getPostMetadata()
  const allPosts = datedPosts.map((post) => (
    <AllPosts key={post.slug} {...post}/>
  ))
  return (
  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto'>
    {allPosts}
  </div>
  )
}

export default Blog