import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { feachSelectedData } from '../../apis/index';
import { Store } from '../../store/index';

export const VideoDetail = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const location = useLocation();
    const setSelectedVideo = async () => {
        // location.search URLの?移行のパラメータをStringで取得
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('v');
        console.log('id', id);
        await feachSelectedData(id).then((res) => {
            const item = res.data.items.shift();
            setGlobalState({type: 'SET_SELECTED', payload: {selected: item}});
        });
    };
    useEffect(() => {
        setSelectedVideo();
    },[]);
    return (
        <div>
            
        </div>
    )
}
