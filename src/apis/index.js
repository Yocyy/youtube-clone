import axios from "axios";

const KEY = 'AIzaSyD8D-tzOzfSelH4inRmdTsS4s73AyJilLg';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

const params = {
    part: 'snippet',
    maxResults: 40,
    key: KEY,
    regionCode: 'JP',
    type: 'video',
    chart: 'mostPopular'
}

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            part: 'snippet',
            maxResults: 40,
            key: KEY,
            regionCode: 'JP',
            type: 'video',
            chart: 'mostPopular'
        }
    });
}

export const feachSelectedData = async (v) => {
    return await youtube.get('videos', {
        params: {
            ...params,
            v
        }
    })
}