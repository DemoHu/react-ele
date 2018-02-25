import React, {Component} from 'react';
import '../App/App.css'
import './AddressDetail.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAddress, saveAddressAll} from '../../reducers/address/addressAction'
import {get} from 'axios'
import {objectMap} from '../../common/tool'
import {Icon, Button, Input, List} from 'antd'

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

class addressDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: 0
    }
  }

  componentWillMount() {
    let {name, id} = this.props.match.params
    this.setState({name, id})
  }
  render() {
    let {name, id} = this.state;
    return (
        <div className='App'>
          <div className='header'>
            <div>
              <div className='title cell'>
              <span>
                <Icon type='left' onClick={()=>{
                  this.props.history.goBack();
                }}/>
              </span>
                <span>{name}</span>
                <span>切换城市</span>
              </div>
            </div>
          </div>
          <div className='input_address '>
            <Input className='input' placeholder='输入学校,商务楼,地址'/>
            <Button type="primary" className='submit'>提交</Button>
          </div>
          <div className='cell' style={{fontSize: '0.2rem', height: '0.4rem'}}>搜索历史</div>
          <div style={{backgroundColor: '#fff'}}>
            <List
                footer={<div style={{fontSize: '0.4rem', textAlign: 'center'}}>清空所有</div>}
                bordered
                dataSource={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                renderItem={item => {
                  return (<List.Item>
                    <div className='item'>
                      <div>霍营[地铁站]{item}</div>
                      <div>地铁八号线.地铁13号线</div>
                    </div>
                  </List.Item>)
                }}
            />
          </div>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addressDetail)
