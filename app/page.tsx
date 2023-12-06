import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetadata';


export default function Home() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}/>
  ))
  return (
  <div className='py-15'>
    <div>{postPreviews}</div>
  </div>
  )
}
