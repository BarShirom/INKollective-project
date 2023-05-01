import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserTattooCard from './UserTattooCard'
import { getAllImages } from '../../../features/images/imagesAction'
import { AppDispatch } from "../../../app/store";
import "./UserImages.css"

const UserImages = () => {
    const allImages = useSelector((state: any) => state.images.userImages)
    const userImagesArray = allImages.filter((image: any) => image.userName === localStorage.getItem("userName"))
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getAllImages())

    }, []);

    return (
        <div className='userImages'>
            {userImagesArray && userImagesArray.map((image: any) => <UserTattooCard {...image} />)}
        </div>
    )
}

export default UserImages