import {createStore} from 'redux';
import reducer from './reducers';
import {obtenerStateStorage, guardarStateStorage} from './localStorage';

//Definir state inicial 
/*Cada reducer tiene su propio state entonces se comenta la linea de abajo
const initialState = [];

*/
//para poder utilizar la extension de chrome 
/* 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
*/
//Obtener citas del localStorage
const storageState = obtenerStateStorage();

const store = createStore (
    reducer, 
    storageState,
  //igual que lo de arriba  initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe( () => {
  guardarStateStorage({
    citas:store.getState().citas
  })

});
export default store;