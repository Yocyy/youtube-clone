import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { feachSelectedData } from '../../apis/index';

export const VideoDetail = () => {
    const location = useLocation();
    const setSelectedVideo = async () => {
        // location.search URLの?移行のパラメータをStringで取得
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('v');
        console.log('id', id);
        await feachSelectedData(id).then((res) => {
            console.log('test');
        });
    };
    useEffect(() => {
        setSelectedVideo();
    });
    return (
        <div>
            
        </div>
    )
}
