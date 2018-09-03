import request from 'superagent';
export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export function requestGifs(term = null) {
    const data = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;

    return {
        type: REQUEST_GIFS,
        payload: data
    }
}
