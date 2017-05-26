const initState = {
    products: [],
    total: parseFloat('0.00')
};

const productReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type) {
        case 'ADD_TO_CART':
            let hasItem = false;
            for (let item of newState.products) {
                if (item.name === action.payload.name) {
                    item.quantity++;
                    console.log(`${parseFloat(newState.total) + action.payload.price}, typeof total: ${typeof parseFloat(newState.total)}, typeof action: ${typeof action.payload.price}`);
                    newState.total = (parseFloat(newState.total) + action.payload.price).toFixed(2);
                    hasItem = true;
                    break;
                }
            }
            if(!hasItem){
                console.log(`${parseFloat(newState.total) + action.payload.price}, typeof total: ${typeof parseFloat(newState.total)}, typeof action: ${typeof action.payload.price}`);
                newState.products.push(action.payload);
                newState.total = (parseFloat(newState.total) + action.payload.price).toFixed(2);
            }
            return newState;
        case 'DELETE_FROM_CART':
            const len = newState.products.length;
            for (let i = 0; i < len; i++){
                if(newState.products[i].name === action.payload.name){
                    //console.log(`${newState.total} - ${newState.products[i].price} * ${newState.products[i].quantity} = ${newState.total - newState.products[i].price*newState.products[i].quantity}`)
                    newState.total = (newState.total - (newState.products[i].price*newState.products[i].quantity).toFixed(2)).toFixed(2);
                    newState.products.splice(i,1);
                    break;
                }
            }
            return newState;
        case 'INCREMENT':
            for (let item of newState.products) {
                if (item.name === action.payload.name ) {
                    item.quantity++;
                    newState.total = (parseFloat(newState.total) + action.payload.price).toFixed(2);
                    break;
                }
            }
            return newState;


        case 'DECREMENT':
        
            for (let item of newState.products) {
                if(item.name === action.payload.name & item.quantity >= 1) {
                    item.quantity--;
                    newState.total = (parseFloat(newState.total) - action.payload.price).toFixed(2);
                    break;
                }

            }
            return newState;

        case 'EMPTY_CART':
            newState = {
                products: [],
                total: 0.00
            };

            return newState;
    }


    return newState;
};

export default productReducer;