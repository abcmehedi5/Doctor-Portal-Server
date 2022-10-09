import React from 'react';
import { useReducer } from 'react';


const initialState = { counts: 0 }
const reducer = (state, action) => {
console.log(state);
    switch (action.type) {
        case 'INCREMENT':
            return { counts: state.counts + 1 };
        case 'DECRIMENT':
            return { counts: state.counts - 1 }
        default:
            return state;
    }
}
const RedicerCout = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>This is Reducer counts: {state.counts}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment +</button>
            <button onClick={() => dispatch({ type: 'DECRIMENT' })}>Increment -</button>
            <hr />
        </div>
    );
};

export default RedicerCout;