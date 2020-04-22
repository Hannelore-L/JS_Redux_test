//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import './index.css';
import store from './data';
import Count from './components/Count';
import Friends from './components/Friends';
import Filter from './components/Filter';


//        -        -        -        V A R I A B L E S        -        -        -
const root = document.getElementById( "app" );


//        -        -        -        C O D E        -        -        -
const App = props => {
     return (
          <Provider store={ store }>
               <Count />
               <Friends />
               <Filter />
          </Provider>
     );
};

render( <App />, root );