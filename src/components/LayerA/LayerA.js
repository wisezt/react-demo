import React from 'react';

const food=[   'rice',
    'meat',
    'vegetable'
]


const LayerA = (props) =>{
    const loopState = () =>{
        let result = null;
        for (let key in props.state){
          //  result = result + <div> + key +  </div> + <div>props.state[key] + <div>;
        }
        return result;

    }


    return(
        <div>
            {loopState()}
    {console.log(props.food)}
    {console.log(props.person)}

            <div>a1</div>



        </div>
    )





}

export default LayerA;