import React from 'react'

const PostItem = (props) => {
    const { itemKey, title, likes, text } = props;

    return (<li key={itemKey}>
        <div className="title">{title}</div>
        <div className="likes">Likes: {likes || 0}</div>
        <div className="text">{text}</div>
    </li>)
}

export default PostItem
