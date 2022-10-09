// initial state
export const patientState = {
    patient: []
}

// reducer funcation
export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatient = [...state.patient, newPatient] // state all copy & newPatient replace
            return { patient: allPatient }
        case 'REMOVE_PATIENT':
            const remaining = state.patient.filter(pt => pt.id !== action.id)
            return { patient: remaining }
        default:
            return state
    }
}