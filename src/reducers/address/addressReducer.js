const {
  ADDRESS_ALL,
  ADDRESS_HOT,
  ADDRESS_GUESS,
} = require('../../config/Cts').default;
const initState = {
  addressAll: {},
  hot: [],
  address:{},
}
export default function addressReducer(state = initState, action) {
  switch (action.type) {
    case ADDRESS_ALL:
      return {
        ...state,
        addressAll: action.json
      }
      break;
    case ADDRESS_HOT:
      return {
        ...state,
        hot: action.json
      }
      break;
    case ADDRESS_GUESS:
      return {
        ...state,
        address: action.json
      }
      break;
    default:
      return state
      break;
  }
}