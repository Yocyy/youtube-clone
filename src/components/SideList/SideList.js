import React, { useEffect, useContext } from 'react'
import { Store } from '../../store/index'
import { feachRelatedData } from '../../apis/index'
import { SideListItem } from '../SideListItem/SideListItem'
import Style from './SideList.module.scss'

export const SideList = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const setRelatedVideo = async (id) => {
        await feachRelatedData(id).then((res) => {
            const dataArray = res.data.items;
            for (var i = 0; i < dataArray.length; i++) {
              if (!dataArray[i].hasOwnProperty('snippet')) {
                dataArray.splice(i, 1)
              }
            }
            setGlobalState({type: 'SET_RELATED', payload: {related: res.data.items}})
        })
    }
    useEffect(()=>{
        if (globalState.selected)
            setRelatedVideo(globalState.selected.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalState.selected])
    return (
        <div className={Style.sidenav}>
            {
                globalState.related ? globalState.related.map((video) => {
                    return (
                        <SideListItem
                            id={video.id.videoId}
                            key={video.id.videoId}
                            src={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                        />
                    )
                }) : <span>no data</span>
            }
        </div>
    )
}
