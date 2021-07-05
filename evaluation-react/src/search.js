
import React from 'react'
import './search.css'
import { useState , useEffect } from 'react'
import ShowList from './ShowList';

export default function Search(){

    const[data, setData] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");

    useEffect (() => {
        fetch('http://localhost:4000/rest/shows')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

const handleSearchTerm = (searchinput) => {
    let value = searchinput.target.value;
    setSearchTerm (value);
}

console.log(searchTerm);

return (
    <>
    <div className="search">
            <h1>Netfli</h1>
            <input
            className="search-bar" 
            type="text" 
            name="searchbar" 
            id="searchbar" 
            placeholder="Search here"
            onChange={handleSearchTerm}
            ></input>
     
   
    <ShowList className="content" shows={data.filter((show)=>
    {return show.title.includes(searchTerm) })}/>
    </div>


    </>

)
}