import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetadata';
import Link from 'next/link'

export default function Home() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}/>
  ))
  return (
  <div className='pt-20'>

    <h1 className="text-3xl font-bold mx-auto">Hello Blogs</h1>
    <div>{postPreviews}</div>
  </div>
  )
}
