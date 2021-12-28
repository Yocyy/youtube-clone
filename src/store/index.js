/*////////////////////////////////////////////////////////
// Store.js
// API から受け取ったデータを格納し、グローバルステートとして提供する。
*/////////////////////////////////////////////////////////

import { createContext, useReducer } from "react";

// グローバルステート初期値(state)
const initialState = {
    popular: [],
    related: [],
    searched: [],
    selected: {},
    term: ''
}

// 処理関数(dispatch)
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POPULAR':
            return { ...state, popular: action.payload.popular }
        case 'SET_RELATED':
            return { ...state, related: action.payload.related }
        case 'SET_SEARCHED':
            return { ...state, searched: action.payload.searched }
        case 'SET_SELECTED':
            return { ...state, selected: action.payload.selected }
        case 'SET_TERM':
            return { ...state, term: action.payload.term}
        default:
            return state
    }
}

// Storeインスタンス
export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
});

// 親要素から子要素(コンポーネント)にstateを継承。
export const StoreProvider = ({ children }) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
        <div>
            <Store.Provider value={{ globalState, setGlobalState }}>
                {children}
            </Store.Provider>
        </div>
    );
}