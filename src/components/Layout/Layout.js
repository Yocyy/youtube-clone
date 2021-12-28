import React from 'react'
import { Header } from '../Header/Header'
import Style from './Layout.module.scss'

/*////////////////////////////////////////////////////////
// Layout.js
// モジュールの表示順を構成する。
*/////////////////////////////////////////////////////////
export const Layout = ({children}) => {
    return (
        <div className={Style.wrapper}>
            <Header />
            <div className={Style.main}>
                {children}
            </div>
        </div>
    )
}
