const { createStore } = require("redux");

const initialState ={ counter: 0 , showCounter: true }
const counterReducer = (state = initialState, action) => {
    if (action.type === 'inc') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    else if (action.type === 'dec') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    else if (action.type === 'increase') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    else if(action.type === 'reset'){
        return {
            ...state,
            counter: 0
        }
    }
    else if(action.type === 'toggle'){
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }
    return state;
}

const counterStore = createStore(counterReducer);

export default counterStore;


// const counterSubscribe = () =>{
//     counterStore.getState();
// }

// counterStore.subscribe(counterSubscribe);

