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

  swithNameHandler=(newName)=>{
    //console.log("was clicked");
    this.setState({
      person: [
        {name:newName,age:5},
        {name:'Moulesh',age:2.5},
        {name:'Eswar',age:35}
        
      ]
    })
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
    return (
      <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Switch Name</button>
      {
        this.state.showPerson ?
      
        <div>
          <Person
             name={this.state.person[0].name}
              age={this.state.person[0].age}/>

          <Person
              name={this.state.person[1].name} 
              age={this.state.person[1].age}
              click={this.swithNameHandler.bind(this,'Moulesh')}
              changed={this.nameChangeHandler}>
                    His Hobbies:Playing with akka 
            </Person>
          <Person
                name={this.state.person[2].name} 
                age={this.state.person[2].age}/>
          </div>:null
      }
      </div>
    );
  }
}

export default App;
