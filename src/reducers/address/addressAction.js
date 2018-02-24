import axios from 'axios'
const {
  ADDRESS_ALL,
  ADDRESS_HOT,
  ADDRESS_GUESS,
} = require('../../config/Cts').default;
export function saveAddressAll(json) {
  return {
    type: ADDRESS_ALL,
    json: json
  }
}
export function getAddress(type = 'group',callback) {
  return dispatch => {
    axios.get(`http://cangdu.org:8001/v1/cities?type=${type}`)
    .then(res=>{
      callback(res.data);
    })
  }
}
