/* eslint-disable*/
import React,  { Component }  from 'react';
import { connect } from 'react-redux'
import { setInfoList } from '../store/action'

class Page1 extends Component {
    constructor(props) {
        super(props)
    }

    test = (type, index, e) => {
        let { setInfoList } = this.props
        setInfoList({type:type, value: index})
    }

    render() {
        return (
            <div className="page-content">
                <ul>
                    <li><span>tab1-1</span><i onClick={(e) => this.test('add','tab1-1', e)}>+</i><i onClick={(e) => this.test('rem','tab1-1', e)}>-</i></li>
                    <li><span>tab1-2</span><i onClick={(e) => this.test('add','tab1-2', e)}>+</i><i onClick={(e) => this.test('rem','tab1-2', e)}>-</i></li>
                    <li><span>tab1-3</span><i onClick={(e) => this.test('add','tab1-3', e)}>+</i><i onClick={(e) => this.test('rem','tab1-3', e)}>-</i></li>
                </ul>
            </div>
        );
    }
    componentDidMount() {
        // console.log(this.props)
    }
} 

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setInfoList(data) {
            dispatch(setInfoList(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Page1);