export const initialStateGetPost = {
    loading: true,
    error: '',
    post: {},
}
export const reducerGetpost = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.result,
            };
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There Was a problem fetching!'
            };
        default:
            return state;
    }
}