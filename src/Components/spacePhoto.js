import React from 'react';



const SpacePhoto = (props) => {


    return (
        <div>
            <h1>{props.data.title}</h1>
            <h2>{props.data.date}</h2>
            <img src={props.data.url} alt='Big Nebula' />
            <div>
            <h2>{props.data.explanation}</h2>
            </div>
        </div>
    )
}

export default SpacePhoto