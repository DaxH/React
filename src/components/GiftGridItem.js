import React from 'react'

const GiftGridItem = ({ url, title }) => {
    return (
        <div className="card animate__backInLeft">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export {
    GiftGridItem
}