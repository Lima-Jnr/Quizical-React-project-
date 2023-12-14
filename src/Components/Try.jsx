// import React, {useReducer, useState} from 'react'

// //Using this component to learn other React Hooks
// function Try() {
//     const reducer = (state, action ) => {
//        switch (action.type) {
//         case "Increment":
//            return {count: state.count +1, showText: state.showText} 
       
//         case "toggle":
//             {
         
//                 return {count: state.count, showText: !state.showText}

//         }
//             break;
//       }
//     }

// const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})




//   return (
//     <div>
//         <h1> {state.count}</h1>
//         {state.showText ? <h1>This is the count above</h1> : <></>}
//         <button onClick={()=>{
//             dispatch({type: "Increment"});
//             dispatch({type: "toggle"});
//         }}>Increment</button>

//     </div>
//   )

//     }
// export default Try