import React from 'react';
import styled from 'styled-components';


const SpacePhoto = (props) => {
const StyledDetails = styled.div`
display:flex;
width:100%;
flex-direction: column;
align-items: center;
img {
    border-radius: 30%;
    border: 1px cyan solid;
}
img:hover {
    border: 2px gold solid;
}
h1 {
    font-size: 2rem;
    color: darkgoldenrod;
}
.div1 {
    background-color: seashell;
    padding: 2%;
    width: 100%;
}
.first {
    color: blueviolet;
}
.div2 {
    background-color: firebrick;
    padding: 3% 0 1% 0;
    width:100%;
}
.div2 h2:hover {
    color: gold;
}
.explain {
    display:flex;
    font-size: .7rem;
    width: 60%;
}
.explain:hover {
    font-size:.8rem;
    color: burlywood;
    width:90%;
}

`

    return (
        <StyledDetails>
            <div class='div1'>
                <h1>{props.data.title}</h1>
                <h2 class='first'>{props.data.date}</h2>
            </div>
            <div class='div2'>
                <img src={props.data.url} alt='Big Nebula' />
                <h2><b>Image Credit & Copyright</b>: {props.data.copyright}</h2>
            </div>
            <div class='explain'>
                <h2>{props.data.explanation}</h2>
            </div>
        </StyledDetails>
    )
}

export default SpacePhoto