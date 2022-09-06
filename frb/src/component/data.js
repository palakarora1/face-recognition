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
        <div>
            <div>
                <h1 style={{textAlign: "center"}}> Face Recognition Based Attendance System</h1>
            </div>
            <table class="center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Data