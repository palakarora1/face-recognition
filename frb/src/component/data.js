import React, { useState,useEffect } from 'react'
import './data.css';

const Data = () => {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1/api/php/api.php")
        .then(res=>res.json())
        .then(
            (result)=>{
                setItem(result);
            }
        )
    },[])
    return (
       
    )
}

export default Data
