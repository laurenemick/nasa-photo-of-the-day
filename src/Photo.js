import React from 'react'

export default function Photo(props) {
    const { nasaPhoto } = props

    return (
        <div className="PhotoOfTheDay">
             <img src={nasaPhoto.url} alt={nasaPhoto.title} />
        </div>
    )
}