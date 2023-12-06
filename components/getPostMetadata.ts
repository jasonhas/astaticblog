import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from './PostMetadata';
import { DateTime } from 'luxon';

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

    const sortBlogPostsByDate = posts.sort((a, b) => {
      const beforeDate:any = DateTime.fromFormat(a.date, 'MM-dd-yyyy')
      const afterDate:any = DateTime.fromFormat(b.date,'MM-dd-yyyy')
      return afterDate - beforeDate
    })

    return posts
  }

  export default getPostMetadata