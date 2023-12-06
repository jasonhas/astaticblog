import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from 'next/image'
import {DateTime} from 'luxon'

const PostPreview = (props: PostMetadata ) => {

const image = props.mainImage;
const alt = props.imageAlt;
const dt = DateTime.fromFormat(props.date,"MM-dd-yyyy")
const formatted = dt.toFormat("MMMM dd, yyyy")

return (
    <div className="max-w-7xl mx-auto flex flex-col p-4">
      <Link href={`/posts/${props.slug}`}>
      <h1 className="text-3xl md:text-5xl font-bold">{props.title}</h1>
      </Link>
      
      <p>{formatted}</p>
      {image &&
        <Image src={image} height={1080} width={1920} alt={alt}/>
      }
    </div>
)
}

export default PostPreview;