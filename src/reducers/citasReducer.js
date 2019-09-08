const initialState = {
    citas: []
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type){
        case 'AGREGAR_CITA':
            return {
                ...state,
                citas: [...state.citas, payload]
            }
        case  'BORRAR_CITA':
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
            default:
                return state;



    }

}