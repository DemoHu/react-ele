const {
    ADDRESS_ALL,
    ADDRESS_HOT,
    ADDRESS_GUESS,
} = require('../../config/Cts').default;
const initState = {
    addressAll: {}
}
export default function addressReducer(state = initState, action) {
    switch (action.type) {
        case ADDRESS_ALL:
            return {
                ...state,
                addressAll: action.type
            }
            break;
        default:
            return state
            break;
    }
}