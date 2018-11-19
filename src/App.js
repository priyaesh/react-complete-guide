import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person: [
      {name: 'Hamsa',age:5},
      {name:'Moulesh',age:2.5},
      {name:'Eswar',age:36}
      
    ],
    otherState:'some other value',
    showPerson:false

  }

  

  deletePersonHandler = (personindex) =>{
    const persons=this.state.persons;
    persons.splice(personindex,1)
    this.setState({persons:persons});

  }
    
  nameChangeHandler=(event)=>{
    this.setState({
      person: [
        {name:'Hamsa',age:5},
        {name:event.target.value,age:2.5},
        {name:'Eswar',age:35}
        
      ]
    })
  }

  togglePersonHandler=()=>{
    const doesShow=this.state.showPerson;
    this.setState({showPerson:!doesShow})

  }

  render() {

      const style={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor:'pointer'

      };

      let persons=null;
      if(this.state.showPerson){
        persons=(
        <div>
          {this.state.person.map((person, index)=>{
            return <Person  
                    onclick={()=>this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age} />
                    
                    
          })}
         
         </div>

        );
      }
    return (
      <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Toggle Person</button>
      {persons}
      </div>
    );
  }
}

export default App;
