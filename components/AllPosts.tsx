import React from 'react'
import { PostMetadata } from "./PostMetadata";
import {DateTime} from 'luxon'
import Link from 'next/link'

const AllPosts = (props: PostMetadata) => {
    const image = props.mainImage;
    const alt = props.imageAlt;
    const dt = DateTime.fromFormat(props.date,"MM-dd-yyyy")
    const formatted = dt.toFormat("MMMM dd, yyyy")

    return (
        <div className='md:p-4 p-2'>
            <Link href={`/posts/${props.slug}`}><h2 className='font-bold text-2xl'>{props.title}</h2></Link>
            <p className='py-3'>{formatted}</p>
            <img src={image} alt={alt}/>
            <p className='py-6'>{props.description}</p>
        </div>
    )
}

export default AllPosts