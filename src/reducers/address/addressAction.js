import axios from 'axios'
import tool from  '../../common/tool'
const {
  ADDRESS_ALL,
  ADDRESS_HOT,
  ADDRESS_GUESS,
} = require('../../config/Cts').default;
export function saveAddressAll(type,json) {
  return {
    type: type,
    json: json
  }
}
export function getAddress(type = 'group',callback) {
  return dispatch => {
    axios.get(`http://cangdu.org:8001/v1/cities?type=${type}`)
    .then(res=>{
      switch (type){
        case 'group':
          dispatch(saveAddressAll(ADDRESS_ALL,tool.sortgroupcity(res.data)));
          break;
        case 'guess':
          dispatch(saveAddressAll(ADDRESS_GUESS,res.data));
          break;
        default:
          dispatch(saveAddressAll(ADDRESS_HOT,res.data));
          break;
      }
      callback(res.data);
    })
  }
}
