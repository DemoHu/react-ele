import React, {Component} from 'react';
import {Icon, Row, Col} from 'antd'
import './App.css';

class App extends Component {
  render() {
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
            <div className='cell address '>
              <span className='font_color'>北京</span> <Icon type="right"/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
