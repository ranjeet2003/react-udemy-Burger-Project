import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1 onClick = { props.click } > Hi, My name is {props.name} and I am {props.age} years old.</h1>
            <h3>{props.children}</h3>
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
    )

};
export default person;