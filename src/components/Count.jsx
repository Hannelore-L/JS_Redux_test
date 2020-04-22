//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { increment, decrement, setTo } from '../data/count';


export default () => {
     const count = useSelector( state => state.count );
     const dispatch = useDispatch();

     return (
          <div>
               <h1>{ count }</h1>
               <button
                    onClick={() => {
                         dispatch( increment() );
                    } }
               >
                    +
               </button>

               <button
                    onClick={ () => {
                         dispatch( decrement() );
                    } }
               >
                    -
               </button>

               <button
                    onClick={ () => {
                         dispatch( setTo( 5 ) )
                    } }
               >
                    Set to Five
               </button>
          </div>
     );
};