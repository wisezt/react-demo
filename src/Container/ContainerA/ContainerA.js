import React, {Component} from 'react';
import LayerA from '../../components/LayerA/LayerA';

class ContianerA extends Component{
    state ={
        person:{
            firstName: 'Ting',
            lastName: 'Zheng'
        },

        food:{
          rice: 100,
          meat: 100,
          vegetable: 100
        }
   }


    render(){
        return(
            <LayerA
            person = {this.state.person}
            food = {this.state.food}
            state = {this.state}
            />


        )
    }


};


export default ContianerA;