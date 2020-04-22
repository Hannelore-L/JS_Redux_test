//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { addFriend } from '../data/friends';

export default () => {
     const data = useSelector( state => ({
          friends: state.friends,
          filter: state.filter
     }));

     const dispatch = useDispatch();
     const [ name, setName ] = useState( "" );
     const [ age, setAge ] = useState( "" );

     const nameHandler = e => {
          setName( e.target.value );
     };

     const ageHandler = e => {
          setAge( e.target.value );
     };

     const clickHandler = () => {
          dispatch( addFriend( name, age ) );
     };

     const { friends, filter } = data;

     return (
          <div>
               <label for="firstName">Name:</label>
               <input 
                    type="text"
                    name="firstName"
                    value={ name }
                    onChange={ nameHandler }
               />

               <label for="age">Age:</label>
               <input 
                    type="text"
                    name="age"
                    value={ age }
                    onChange={ ageHandler }
               />

               <button onClick={ clickHandler }>
                    Add Friend
               </button>

               <ul>
                    { friends
                         .filter( friend => ( filter.isEven ? friend.age % 2 === 0 : true ) )
                         .filter( friend => ( filter.isAdult ? friend.age >= 18 : true ) )
                         .map( friend => (
                              <li key={friend.id}>
                                   { friend.fn } ( { friend.age } )
                              </li>
                         ) )
                    }
               </ul>
          </div>
     )
}; // end of export