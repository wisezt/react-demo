import React from 'react';

const LayerA = (props) =>{
    const loopState = () =>{
        let result = <div>loopState</div>;
        for (let key in props.state){
             console.log(props.state[key])
        }
        return result;

    }


    return(
        <>
            {loopState()}


            <div>a1</div>



        </>
    )





}

export default LayerA;