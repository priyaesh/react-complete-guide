import React from 'react';
import './Person.css';

const person = (probs) => {
    return (
        <div className="Person">
            <p onClick={probs.onclick} > I'm  {probs.name} and I am {probs.age}years old! {probs.children}</p>
            <input type="text" onChange={probs.changed} value={probs.name}/>
        </div>
   
    
    )
    
};

export default person;