import axios from "axios";

const KEY = 'AIzaSyAldlWc1kacIeetQR1sue_PVhMRoz6T_cc';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

const params = {
    part: 'snippet',
    maxResults: 40,
    key: KEY,
    regionCode: 'JP',
    type: 'video',
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

export const feachSelectedData = async (id) => {
    return await youtube.get('videos', {
        params: {
            ...params,
            id
        }
    })
}