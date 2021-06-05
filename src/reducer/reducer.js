import { messages } from "../util/data"

const reducer = (state, action) => {
    if(action.type === 'FETCH_NEWS') {
        const ruknlar = [...new Set(messages.map(m => m.rukn))];
        const hududlar = [...new Set(messages.map(m => m.hudud))]
        return {...state, ruknlar: ruknlar, hududlar}
    }
    if(action.type === 'OPEN_SIDEBAR') {
        return {...state, isSidebarOpen: true}
    }
    if(action.type === 'CLOSE_SIDEBAR') {
        return {...state, isSidebarOpen: false}
    }

    if(action.type === 'SET_LANGUAGE') {
        return {...state, languageCount: action.payload}
    }

    if(action.type === "SET_MEDIA") {
        return {...state, mediaCount: action.payload}
    }

    if(action.type === 'SET_NAV_COUNT') {
        return {...state, navCount: action.payload}
    }

    if(action.type === 'OPEN_SEARCH') {
        return {...state, isSearchMode: true}
    }
    if(action.type === 'CLOSE_SEARCH') {
        return {...state, isSearchMode: false}
    }
}

export default reducer