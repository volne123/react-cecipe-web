import React from 'react';

const com_Receipt = ({title,calories,url_image}) =>{
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={url_image} alt=""/>
        </div>
    )
}
export default com_Receipt;