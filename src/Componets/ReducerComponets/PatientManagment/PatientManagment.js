import React from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import { patientReducer, patientState } from '../../Reducer/PatientReducer';

const PatientManagment = () => {
    const nameRef = useRef() // input all value
    const [state, dispatch] = useReducer(patientReducer, patientState)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patient.length + 1 // unique id
        })
        nameRef.current.value = ''
    }


    return (
        <div>
            <h1>Patient Managment: {state.patient.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder='Name' />
            </form>
            {
                state.patient.map(pt => <li key={pt.id}>

                    {pt.name}
                    -- ID: {pt.id}
                    <br /> <button onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })}>X</button>
                </li>)
            }
            <hr />
        </div>
    );
};

export default PatientManagment;