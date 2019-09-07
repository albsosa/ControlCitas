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
            default:
                return state;



    }

}