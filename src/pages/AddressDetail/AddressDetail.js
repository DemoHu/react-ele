import React, { Component } from 'react';
import '../App/App.css'
import './AddressDetail.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAddress, saveAddressAll, getAddressSearch } from '../../reducers/address/addressAction'
import { get } from 'axios'
import tool from '../../common/tool'
import { Icon, Button, Input, List } from 'antd'

function mapStateToProps(state) {
  const { address } = state;
  return { address }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch, ...bindActionCreators({
      getAddress,
      saveAddressAll,
      getAddressSearch,
    }, dispatch)
  }
}

class addressDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: 0,
      keyword:'',
      searchList:[]
    }
  }

  componentWillMount() {
    let { name, id } = this.props.match.params
    this.setState({ name, id })
  }
  toDetail() {
    this.props.history.push(`/home`)
  }
  search() {
    const {dispatch} = this.props;
    let {keyword} = this.state
    keyword =  keyword.replace(/\s+/g, "");
    if(tool.length(keyword)>0){
      dispatch(getAddressSearch('北京', (data) => {
        console.log(data);
        this.setState({searchList:data})
      }))
    }else{
      alert('请输入内容')
    }
   
  }
  render() {
    let { name ,keyword,searchList} = this.state;
    return (
      <div className='App'>
        <div className='header'>
          <div>
            <div className='title cell'>
              <span>
                <Icon type='left' onClick={() => {
                  this.props.history.goBack();
                }} />
              </span>
              <span>{name}</span>
              <span>登录|注册</span>
            </div>
          </div>
        </div>
        <div className='input_address '>
          <Input className='input' value={keyword} onChange={(event)=>this.setState({keyword:event.target.value})} placeholder='输入学校,商务楼,地址' />
          <Button type="primary" className='submit' onClick={()=>this.search()}>提交</Button>
        </div>
        <div style={{ backgroundColor: '#fff' ,height:'auto',overflow:'scroll'}}>
          <List
            bordered
            dataSource={searchList}
            renderItem={item => {
              return (<List.Item>
                <div className='item' onClick={()=>this.toDetail()}>
                  <div>{item.name}</div>
                  <div>{item.address}</div>
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
