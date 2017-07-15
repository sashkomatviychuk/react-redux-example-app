import axios from 'axios'

export const DATA_REQUEST_STARTED = 'DATA_REQUEST_STARTED';
export const DATA_REQUEST_FINISHED = 'DATA_REQUEST_FINISHED';
export const DATA_REQUEST_ERROR = 'DATA_REQUEST_ERROR';

function getPostsListStarted() {
  return { type: DATA_REQUEST_STARTED };
}

function getPostsListFinished(items) {
  return { type: DATA_REQUEST_FINISHED, items };
}

function getPostsListError(errors) {
  return { type: DATA_REQUEST_ERROR, errors };
}

export const getPostsList = () => (dispatch, getState) => {
    dispatch(getPostsListStarted());

    // TODO: use async/await, handle error
    return axios.get('http://localhost:3030')
        .then(result => dispatch(getPostsListFinished(result.data.items)))
        .catch(err => {
            console.log('error', err);
            return dispatch(getPostsListError(err));
        });
}
