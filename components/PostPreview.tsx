import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from 'next/image'
const PostPreview = (props: PostMetadata ) => {

const image = props.mainImage;
const alt = props.imageAlt;

return (
    <div>
      <ul>
        <li><Link href={`/posts/${props.slug}`}>{props.title}</Link><Image src={image} height={1080} width={1920} alt={alt}/></li>
      </ul>
    </div>
)
}

export default PostPreview;