import axios from 'axios';

const KEY = 'AIzaSyD5B9P5Dr9ISDSudMVi0Cvsd7tjgef3AtE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

