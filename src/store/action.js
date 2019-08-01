export function setSysVersion(data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET__VERSION', data: data })
    }
}

export function setInfoList(data) {
    return (dispatch, getState) => {
        if (data.type === 'add') {
            // 防止重复添加
            
            if (getState().infoList.indexOf(data.value) < 0) {
                dispatch({ type: 'ADD_INFO_LIST', data: data.value }) 
            }
        } else {
            console.log(getState().infoList.indexOf(data.value))
            if (getState().infoList.indexOf(data.value) >= 0) {
                dispatch({ type: 'REM_INFO_LIST', data: data.value }) 
            }
        }
    }
}