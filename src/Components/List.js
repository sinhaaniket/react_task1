import { React, useState } from 'react';
import data from "./ListData.json"
// import pic1 from "./Images/pic1.jpg"

function List(props) {
    const filteredData = data.filter((el) => {
        if(props.input === ''){
            return el;
        }

        else{
            return el.first_name.toLowerCase().includes(props.input) || el.last_name.toLowerCase().includes(props.input) || 
            el.gender.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}><p><b>Name </b>- {item.first_name} {item.last_name} </p>
                <p><b>Gender</b> - {item.gender} </p>    
                <p><b>IP address </b>- {item.ip_address}</p></li>
            ))}
            
        </ul>
    )
}

export default List