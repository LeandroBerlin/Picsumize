import React from 'react'

export default function Image(props) {

    //Destructuring from props
    const {
        id,
        author,
        author_url,
        post_url
    } = props.source

    const imageUrl = "https://picsum.photos/800/600?image=" + id

    console.log("RENDER IMAGE")
    return (
        <>
            <img
                alt="This is an API"
                src={imageUrl}
            />
            <p>
                <a
                    target="_blank"
                    href={author_url}
                    rel="noopener noreferrer"
                >{author}
                </a> | <a target="_blank"
                    rel="noopener noreferrer"
                    href={post_url}>Photo</a>
            </p>
        </>
    )
}
