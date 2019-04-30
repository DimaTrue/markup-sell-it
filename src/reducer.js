
const initialState = {
    isLoading: null,
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case 'FETCH_PRODUCTS':
        return {data: action.payload}; 

        default:
        return state;
    }
}