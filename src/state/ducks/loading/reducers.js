
const initialState = {
    loading: false
}

const showLoadingReducer = (state = initialState, action) => {
    if (action.type.includes("_REQUEST")) {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type.includes("_SUCCESS") || action.type.includes("_FAILURE")) {
        return {
            ...state,
            loading: false
        }
    }
    return state;
}

export default showLoadingReducer;