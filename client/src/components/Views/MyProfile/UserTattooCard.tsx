import React from 'react'
import TattooCard from '../../TattooCard/TattooCard'
import { userImageObject } from '../../../features/images/imagesSlice'
import { deleteImageById } from '../../../features/images/imagesAction'
import { AppDispatch } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux"
import "./UserTattooCard.css"

const UserTattooCard = (image: userImageObject) => {
    const dispatch = useDispatch<AppDispatch>();


    function handleDelete(ev: any) {
        dispatch(deleteImageById(image._id))

    }


    return (
        <div className='delete'>
            <TattooCard {...image} />
            <button className='deleteBtn' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UserTattooCard