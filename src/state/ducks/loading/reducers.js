
const initialState = {
    loading: false
}

const showLoadingReducer = (state = initialState, action) => {
    if (action.type.includes("pending")) {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type.includes("fulfilled") || action.type.includes("rejected")) {
        return {
            ...state,
            loading: false
        }
    }
    return state;
}

export default showLoadingReducer;