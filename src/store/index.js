import { applyMiddleware, createStore } from 'redux'
// 引入reducer
import reducers from './reducer'

import thunk from 'redux-thunk';

// 创建store实例
let store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store