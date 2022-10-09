import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { initialStateGetPost, reducerGetpost } from '../../../Reducer/GetPostReducer';

const GetPost = () => {
    const [state, dispatch] = useReducer(reducerGetpost, initialStateGetPost);
    console.log(state);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SUCCESS', result: data });
            })
            .catch((err) => {
                dispatch({ type: 'ERROR' })
            })
    }, [])
    return (
        <div>
            <h1>Get Post Data </h1>
            {
                state.loading ? <h3>Loading....</h3> : <div style={{ width: '50%', margin: 'auto' }}>
                    <h3>Title : {state.post.title}</h3>
                    <h3>ID:   {state.post.id}</h3>
                    <p>Body:   {state.post.body}</p>
                    <hr />
                </div>
            }
            {
                state.error || null
            }
        </div>
    );
};

export default GetPost;