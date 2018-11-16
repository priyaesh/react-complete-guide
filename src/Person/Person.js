import React from 'react';
import './Person.css'

const person = (probs) => {
    return (
        <div>
            <p onClick={probs.click} > I'm  {probs.name} and I am {probs.age}years old! {probs.children}</p>
            <input type="text" onChange={probs.changed}/>
        </div>
   // <p> {probs.children} </p>
    //<p>{}</p>
    )
    
};

export default person;