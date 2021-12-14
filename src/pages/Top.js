import React, { useEffect } from 'react'
import { Layout } from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'

export const Top = () => {
    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data',res);
        });
    },[])
    return (
        <Layout />
    )
}