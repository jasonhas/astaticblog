import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata ) => {

return (
    <div>
      <ul>
        <li><Link href={`/posts/${props.slug}`}>{props.title}</Link></li>
      </ul>
    </div>
)
}

export default PostPreview;