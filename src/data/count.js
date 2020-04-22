//        -        -        -        I N I T I A L   S T A T E        -        -        -

const initialState = 0;


//        -        -        -        -         T Y P E S        -        -        -        -

const INCREMENT     =    "INCREMENT";
const DECREMENT    =    "DECREMENT"
const SETTO              =    "SETTO"


//        -        -           A C T I O N   C R E A T O R S            -        -

export const increment = () => ({
     type: INCREMENT
});

export const decrement = () => ({
     type: DECREMENT
});

export const setTo = val => ({
     type: SETTO,
     payload: val
});


//        -        -        -              R E D U C E R              -        -        -

export default ( state = initialState, { type, payload } ) => {
     switch( type ) {
          case INCREMENT:
               return state + 1;

          case DECREMENT:
               return state - 1;

          case SETTO:
               return payload;

          default:
               return state;
     };
};