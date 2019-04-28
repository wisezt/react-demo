import React from 'react';

const LayerA = (props) =>{
    const loopState = () =>{
        let result = null;
        for (let key in props.state){
            result = result + <div> + key +  </div> + <div>props.state[key] + <div>;
        }
        return result;

    }


    return(
        <div>
            {loopState()}


            <div>a1</div>



        </div>;
    )





}

export default LayerA;