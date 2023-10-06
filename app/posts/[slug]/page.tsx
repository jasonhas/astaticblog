import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import Image from 'next/image'
import {DateTime} from 'luxon'
import Link from 'next/link'
import getPostMetadata from '@/components/getPostMetadata'

const getPostContent = ( slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata()

    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug)
    const dt = DateTime.fromFormat(post.data.date, 'MM-dd-yyyy')
    const formatted = dt.toFormat('MMMM dd, yyyy')
    
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-5 pb-6">
            <div className='text-sm md:text-lg breadcrumbs pb-5'>
                <ul>
                    <li className='text-blue-600'><Link href="/">Home</Link></li>
                    <li className='text-blue-600'><Link href="/blog">Blog</Link></li>
                    <li>{post.data.title} = (You Are Here)</li>
                </ul>
            </div>
            <h1 className='text-3xl md:text-5xl font-bold'>{post.data.title}</h1>
            <p className='py-4 font-semibold'>{formatted}</p>
            <Image src={post.data.mainImage} height={1080} width={1920} alt={post.data.imageAlt} className='py-4'/>
            <div className='max-w-6xl mx-auto'>
            <Markdown className="prose lg:prose">{post.content}</Markdown>
            </div>

        </div>

    )
}

export default PostPage