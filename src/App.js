/* eslint-disable*/
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setSysVersion } from '../src/store/action'
import Page1 from './page/page1'
import Page2 from './page/page2'
import Page3 from './page/page3'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1,
            list: [
                {id: 1, name: 'tab1'},
                {id: 2, name: 'tab2'},
                {id: 3, name: 'tab3'}
            ]
        }
    }
    changActive = (id, e) => {
        this.setState({
            active: id
        })
    }

    render() {
        // 从props中解构store
        let { sysVersion, infoList} = this.props
        let list = this.state.list;
        let active = this.state.active
        let tab = null;
        if (active === 1) {
            tab = <Page1 />
        } else if (active === 2) {
            tab = <Page2 />
        } else if (active === 3) {
            tab = <Page3 />
        }
        return (
            <div className="app-header">
                <h2>redux-demo{sysVersion}</h2>
                <div className="tab">
                    {
                        list.map((item, index) => {
                            return <a className={index + 1 === active ? 'active': ''} key={index} onClick={(e) => this.changActive(item.id, e)}>{item.name}</a>
                        })
                    }
                    {tab}
                </div>
                <h4>select tab</h4>
                <div className="inf-list">
                    {infoList.join(',')}
                </div>
            </div>
        )
    }

    componentDidMount() {
        // let { setSysVersion } = this.props
        // 触发setPageTitle action
        // setSysVersion('新的标题')
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
        sysVersion: state.sysVersion,
        infoList: state.infoList
    }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSysVersion(data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setSysVersion(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
