const initialState = {
    error: false
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type){
        case 'VALIDAR_FORMULARIO':
            return {
                ...state,
                error: payload
            }
            default:
                return state;



    }

}