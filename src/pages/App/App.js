import React, {Component} from 'react';
import {Icon,} from 'antd'
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAddress, saveAddressAll} from '../../reducers/address/addressAction'
import {get} from 'axios'
import {objectMap} from '../../common/tool'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function mapStateToProps(state) {
  const {address} = state;
  return {address}
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch, ...bindActionCreators({
      getAddress,
      saveAddressAll,
    }, dispatch)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {},
      address: '',
      hot: []
    }
  }

  componentDidMount() {
    this.getAddressAll()
  }

  toDetail(data) {
    let {name,id} = data;
    this.props.history.push(`./city/${id}/${name}`)
  }

  getAddressAll() {
    const {dispatch} = this.props;
    dispatch(getAddress('group', (data) => {
      this.setState({group: this.sortgroupcity(data)})
    }));
    dispatch(getAddress('guess', (data) => {
      this.setState({address: data});
    }));
    dispatch(getAddress('hot', (data) => {
      this.setState({hot: data});
    }));

  }

  sortgroupcity(data) {
    let sortobj = {};
    for (let i = 65; i <= 90; i++) {
      if (data[String.fromCharCode(i)]) {
        sortobj[String.fromCharCode(i)] = data[String.fromCharCode(i)];
      }
    }
    return sortobj
  }

  render() {
    let {address, hot, group} = this.state;
    return (
        <div className="app">
          <div className='header'>
            <div>
              <div className='title cell'>
                <span>ele.me</span>
                <span>登录|注册</span>
              </div>
            </div>
            <div className='cell notice'>
              <span>当前定位城市:</span>
              <span>定位不准确时,请在城市列表选择</span>
            </div>
            <div className='cell address ' onClick={() => this.toDetail(address)}>
              <span className='font_color'>{address.name}</span> <Icon type="right"/>
            </div>
          </div>
          <div className='hot_city'>
            <p className='cell notice ' style={{marginBottom: 0}}>热门城市</p>
            <div className='hot_box'>
              {
                hot.map((item, index) => {
                  return <span onClick={() => this.toDetail(item)} className='hot_name font_color' key={index}>{item.name}</span>
                })
              }
            </div>
          </div>
          {
            objectMap(group, (item, key) => {
              return (
                  <div className='hot_city' key={key}>
                    <p className='cell notice ' style={{marginBottom: 0}}>{key}</p>
                    <div className='hot_box '>
                      {
                        item.map((item, index) => {
                          return <span
                              onClick={() => this.toDetail(item)}
                              className='hot_name font_gray ellipsis' key={index}>{item.name}</span>
                        })
                      }
                    </div>
                  </div>
              )
            })
          }
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

