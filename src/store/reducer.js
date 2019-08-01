// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
import defaultState from './state'

function sysVersion(state = defaultState.sysVersion, action) {
    switch (action.type) {
        case 'SET__VERSION':
            return action.data
        default:
            return state
    }
}

function infoList(state = defaultState.infoList, action) {
    const newState = [ ...state ] // 解构的原因是为了做深拷贝，我们操作newState，不会影响state
    switch (action.type) {
        case 'ADD_INFO_LIST':
            newState.push(action.data)
            return newState
        case 'REM_INFO_LIST':
            newState.splice(newState.findIndex(item => item === action.data), 1);
            return newState
        default:
            return state
    }
}

// 导出所有reducer
export default combineReducers({
    sysVersion,
    infoList
})