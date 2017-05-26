const initState = {
    products: [],
    fetching: false,
    fetched: false,
    error: null
};

const productReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type) {
        case 'INIT_PRODUCTS':
            newState.products = action.payload;
            newState.fetching = false;
            newState.fetched = true;
            return newState;
        case 'FETCH_PRODUCTS_START':
            newState.fetching = true;
            return newState;
        case 'FETCH_PRODUCTS_FAILED':
            newState.fetching = false;
            newState.fetched = false;
            newState.error = action.payload;
            return newState;
    }
    return newState;
};

export default productReducer;
