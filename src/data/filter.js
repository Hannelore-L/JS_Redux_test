//        -        -        -        I N I T I A L   S T A T E        -        -        -

const initialState = {
     isEven: false,
     isAdult: false
};


//        -        -        -        -         T Y P E S        -        -        -        -

const TOGGLE_EVEN = "TOGGLE_EVEN"
const TOGGLE_ADULT = "TOGGLE_ADULT"


//        -        -           A C T I O N   C R E A T O R S           -        -

export const toggleEven = () => ({
     type: TOGGLE_EVEN
});

export const toggleAdult = () => ({
     type: TOGGLE_ADULT
});


//        -        -        -              R E D U C E R              -        -        -

export default ( state = initialState, { type, payload } ) => {
     switch ( type ) {
          case TOGGLE_EVEN:
               return { ...state, isEven: !state.isEven };

          case TOGGLE_ADULT:
               return { ...state, isAdult: !state.isAdult };

          default:
               return state;
     };
};