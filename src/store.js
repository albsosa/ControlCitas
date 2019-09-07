import {createStore} from 'redux';
import reducer from './reducers';

//Definir state inicial 
/*Cada reducer tiene su propio state entonces se comenta la linea de abajo
const initialState = [];

*/
//para poder utilizar la extension de chrome 
/* 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
*/
const store = createStore (
    reducer, 
  //igual que lo de arriba  initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;