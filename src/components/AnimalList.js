import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types';
class AnimalList extends Component {
    static PropTypes  = {
        AnimalListArray:PropTypes.isRequired,
      };
    render() {
        return (
            <div>
                    { 
                         <ul>
                             {
                          this.props.AnimalListArray.map(ListArray =>  
                                <li key={ListArray.name}>
                                <span className={"name"}>{ListArray.name}</span>
                                <span className={"catBreeds"}>{ListArray.catBreeds}</span>
                                </li>  
                         )
                        } 
                         </ul>
                    } 
               
            </div>
        )
    }
}

export default AnimalList;



 