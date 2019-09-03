const defaultState = {
  user: [],
  post: []
}

const admin = (state = defaultState, action) => {
  switch(action.type) {
    case 'GOT_USERS':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default admin;