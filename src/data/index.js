//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import countReducer from './count';
import friendsReducer from './friends';
import filterReducer from './filter';

export default createStore(
     combineReducers({
          friends: friendsReducer,
          count: countReducer,
          filter: filterReducer
     }),
     applyMiddleware( logger )
);