import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>Hi, My name is {props.name} and I am {props.age} years old.</h1>
            <h3>{props.children}</h3>
        </div>
    )

};
export default person;