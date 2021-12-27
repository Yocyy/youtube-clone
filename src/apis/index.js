/*////////////////////////////////////////////////////////
// Youtube Data API v3からデータを取得する
*/////////////////////////////////////////////////////////

import axios from "axios";

const KEY = 'AIzaSyAldlWc1kacIeetQR1sue_PVhMRoz6T_cc';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

// 共通パラメータ
const params = {
    part: 'snippet',
    maxResults: 40,
    key: KEY,
    regionCode: 'JP',
    type: 'video',
}

// 現在人気な動画データを返す。
export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            chart: 'mostPopular'
        }
    })
}

// id:string 引数で指定した動画データを返す。
export const feachSelectedData = async (id) => {
    return await youtube.get('videos', {
        params: {
            ...params,
            id
        }
    })
}

// id:string 引数で指定した動画に関連する動画データを返す。
export const feachRelatedData = async (id) => {
    return await youtube.get('/search', {
        params: {
            ...params,
            relatedToVideoId: id
        }
    })
}

// query:string 引数で指定した検索結果動画データを返す。
export const feachSearchdData = async (query) => {
    return await youtube.get('/search', {
        params: {
            ...params,
            q: query
        }
    })
}