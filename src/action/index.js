import axios from 'axios';
export const GET_POSTS = 'GET_POSTS';

export function getPosts(){
    return dispatch =>  {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp => dispatch({type:GET_POSTS, payload:resp}))
    }
}
