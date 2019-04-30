import React from 'react';

let array = [];

const LayerA = (props) =>{

    const loopState = () =>{

        for (let key in props.state){
           console.log(key + ': '  +props.state[key]);
           array.push(props.state[key]);
        }
        return array;

    }


    return(
            <div>

                {loopState()}



</div>

      )





}

export default LayerA;