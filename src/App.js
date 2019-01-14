import React, { Component } from 'react';
import logo from './logo.svg';
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

 
class App extends Component {
  state ={
    AnimalListArray: [
        {
            name:"Pamuk",
            catBreeds:"British"
        }
    ]
}

  addAnimals =(ListArray)=>{
    const {AnimalListArray} =this.state
    AnimalListArray.push(ListArray);
    this.setState({
      AnimalListArray
    })
  }
  render() {
    return (
      <div className="App">
      
         <AnimalList AnimalListArray={this.state.AnimalListArray} />
         <AnimalForm addAnimals={this.addAnimals}/> 
         </div>
     
    );
  }
}

export default App;
