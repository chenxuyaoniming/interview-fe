## redux 多仓库用法

```.js

    //合并reducer index.js
    
    import {combineReducers} from 'redux';
    // 按需加载组件时执行对应的state
    import {routerReducer} from 'react-router-redux';
    // 其他页面的reducer也按下面导入combine
    import reducers from './homeReducer';

    // 需要放到store的state注册到这里

    export default combineReducers({
        routing: routerReducer,
        home: reducers
    });

    // 创建store 并使用中间件 store.js

    import {createStore, applyMiddleware} from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducer/index';
    // import { browserHistory } from 'react-router-dom';
    import {routerMiddleware} from 'react-router-redux';
    // import promiseMiddleware from './../utils/promise-middleware';

    // const router = routerMiddleware(browserHistory);

    export default function configureStore(initialState) {
        const store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(
                thunk,
                // promiseMiddleware(),
                // router
            )
        );
        window.store = store;
        return store;
    }



```
