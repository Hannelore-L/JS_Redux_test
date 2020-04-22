//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { toggleEven, toggleAdult } from '../data/filter';


export default () => {
     const filterData = useSelector( state => state.filter );
     const dispatch = useDispatch();

     const evenHandler = e => {
          dispatch( toggleEven() );
     };

     const adultHandler = e => {
          dispatch( toggleAdult() );
     };

     return (
          <div>
               <input 
                    type="checkbox"
                    name="isEven"
                    checked={ filterData.isEven }
                    onChange={ evenHandler }
               />
               <label for="isEven">Even</label>

               <input 
                    type="checkbox"
                    name="isAdult"
                    checked={ filterData.isAdult }
                    onChange={ adultHandler }
               />
               <label for="isAdult">Adult</label>
          </div>
     );
};