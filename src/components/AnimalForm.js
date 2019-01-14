import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class AnimalForm extends Component {
  state={
    name:"",
    catBreeds: ""
  }

  static PropTypes  = {
    addAnimals:PropTypes.func
  }
  onChange = (event) =>{
     this.setState(
       {
    [event.target.name] : event.target.value,
    [event.target.catBreeds] : event.target.value
       }
     )
  }
   onSubmit = (e) =>{
     this.props.addAnimals({
      ...this.state 
     });
   }

  render(){
    return(
        <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name'
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.onChange}
            />
        </Form.Field>
        <Form.Field>
          <label>Cat Breeds</label>
          <input placeholder='Cat Breeds'
           name="catBreeds" 
           id="catBreeds" 
           value={this.state.catBreeds}
           onChange={this.onChange}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form> 
    )

  }
}