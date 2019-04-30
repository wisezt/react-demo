import React from 'react';

<<<<<<< HEAD
let array = [];
=======
const food=[   'rice',
    'meat',
    'vegetable'
]

>>>>>>> 851bd598741976e7398bc1a984a0e184bae93aaa

const LayerA = (props) =>{

    const loopState = () =>{

        for (let key in props.state){
<<<<<<< HEAD
           console.log(key + ': '  +props.state[key]);
           array.push(props.state[key]);
=======
          //  result = result + <div> + key +  </div> + <div>props.state[key] + <div>;
>>>>>>> 851bd598741976e7398bc1a984a0e184bae93aaa
        }
        return array;

    }


    return(
<<<<<<< HEAD
            <div>

                {loopState()}
=======
        <div>
            {loopState()}
    {console.log(props.food)}
    {console.log(props.person)}
>>>>>>> 851bd598741976e7398bc1a984a0e184bae93aaa



</div>

<<<<<<< HEAD
      )
=======
        </div>
    )
>>>>>>> 851bd598741976e7398bc1a984a0e184bae93aaa





}

export default LayerA;