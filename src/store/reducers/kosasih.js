const defaultState = {
  message: 'Kosasih fox',
  teacher: 'Semmi Verian Kosasih',
  isLogin: false
}

export default function (state=defaultState, action) {
  const {type} = action
  switch (type) {
    case 'CHANGE_TITLE':
      return {message: 'Active Fox'}
    case 'CHANGE_CUST_TITLE': 
      return {...state, message: action.newMessage}
    default:
      return state
  } 
}