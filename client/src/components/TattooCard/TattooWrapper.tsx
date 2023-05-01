import React from 'react'
import { useSelector } from 'react-redux'
import TattooCard from './TattooCard'
import { RootState } from '../../app/store';
import "./TattooWrapper.css"

interface Props {
  searchFilter?: string;
}
const TattooWrapper = ({ searchFilter }: Props) => {
    const images = useSelector((state: RootState)=> state.images.userImages)
    const filteredImages = images.filter(img => !searchFilter || img.subject?.includes(searchFilter))
   
     
  return (
    <div className='tattooWrapper'>
        {filteredImages && filteredImages.map((image:any)=> <TattooCard {...image}/>)}
    </div>
  )
}

export default TattooWrapper