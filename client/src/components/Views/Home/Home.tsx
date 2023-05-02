import React, { useEffect, useState } from "react"
import "./Home.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllImages } from "../../../features/images/imagesAction"
import TattooWrapper from "../../TattooCard/TattooWrapper"
import { AppDispatch } from "../../../app/store";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchField, setSearchField] = useState('')
    const [searchFilter, setSearchFilter] = useState('')

    const handleFilterSet = (e: any) => {
        e.preventDefault()
        setSearchFilter(searchField)
    }


    useEffect(() => {
        dispatch(getAllImages())

    }, []);

    return (
        <div>
            <form className="searchForm">
                <input onChange={e => setSearchField(e.target.value)} className="searchInput" type="text" placeholder="Search for tattoo ideas.."></input>
                <button onClick={handleFilterSet} className="searchButton">Search</button>
                <TattooWrapper searchFilter={searchFilter} />
            </form>

        </div>
    )
}

export default Home