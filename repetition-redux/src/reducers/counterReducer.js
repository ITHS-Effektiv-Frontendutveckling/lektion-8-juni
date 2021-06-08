const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_COUNT': {

    }
    default:
      return state;
  }
}

export default counterReducer;