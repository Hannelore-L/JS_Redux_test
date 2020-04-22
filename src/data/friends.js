//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import { v4 as uuid } from 'uuid';


//        -        -        -        I N I T I A L   S T A T E        -        -        -

const initialState = [
     {
          id: uuid(),
          fn: "David",
          age: 38
     },
     {
          id: uuid(),
          fn: "Els",
          age: 29
     },
     {
          id: uuid(),
          fn: "Jos",
          age: 16
     },
     {
          id: uuid(),
          fn: "Pieter",
          age: 22
     },
     {
          id: uuid(),
          fn: "Jordan",
          age: 24
     },
     {
          id: uuid(),
          fn: "Romelu",
          age: 19
     },
     {
          id: uuid(),
          fn: "Hannelore",
          age: 63
     }
];


//        -        -        -        -         T Y P E S        -        -        -        -

const ADD_FRIEND =  "ADD_FRIEND";


//        -        -            A C T I O N   C R E A T O R S           -        -

export const addFriend = ( fn, age ) => ({
     type: ADD_FRIEND,
     payload: {
          id: uuid(),
          fn,
          age
     }
});


//        -        -        -              R E D U C E R              -        -        -

export default ( state = initialState, { type, payload } ) => {
     switch ( type ) {
          case ADD_FRIEND:
               return [ ...state, payload ];

          default:
               return state;
     };
};