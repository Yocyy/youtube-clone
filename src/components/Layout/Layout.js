/*////////////////////////////////////////////////////////
// Layout.js
// モジュールの表示順を構成する。
*/////////////////////////////////////////////////////////

import React from 'react'
import { Header } from '../Header/Header'
import Style from './Layout.module.scss'

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
