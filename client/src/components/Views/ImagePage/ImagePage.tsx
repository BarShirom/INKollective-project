import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom"
import { RootState } from '../../../app/store'
import "./ImagePage.css"

const ImagePage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const imageId = location.search.split('=').at(-1)
    const image = useSelector((state: RootState) => state.images.userImages.find(({ _id }) => imageId === _id))
    return (
        <div className='imagePageContainer'>

            <img className='imgPage' src={image?.imageUrl} alt={image?.subject || 'hay hop'} />
            <br />
            <button className='imagePageBtn' onClick={() => navigate(-1)}>Go Back</button>
        </div>

    )
}

export default ImagePage