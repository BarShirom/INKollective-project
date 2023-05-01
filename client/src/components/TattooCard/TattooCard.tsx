import React from "react"
import { useNavigate } from 'react-router-dom'
import  './TattooCard.css'
import { useSelector } from "react-redux"
import { userImageObject } from "../../features/images/imagesSlice"



const TattooCard = ({userName, subject, imageUrl, contact, _id}: userImageObject) => {
    const navigate = useNavigate()

    return(
        <div className="tattooCard">
            <h3>{userName}</h3>
            <h3>Tattoo subject: {subject}</h3>
            <img className='img' src={imageUrl} onClick={()=>navigate(`/imagePage?img=${_id}`)}></img>
            <h3>Contact details: {contact}</h3>

        </div>
    )
}
export default TattooCard

