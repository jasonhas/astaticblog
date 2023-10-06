import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from './PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    
    const posts = markdownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`posts/${filename}`, "utf8")
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        slug: filename.replace(".md", ""),
        mainImage: matterResult.data.mainImage,
        imageAlt: matterResult.data.imageAlt,
      }
    })


    return posts
  }

  export default getPostMetadata