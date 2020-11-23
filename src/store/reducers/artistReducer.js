const artistReducer = (state=[], action) => {
    switch(action.type){
        case "NEW_POST":
            return [...state, action.payload];
        case "DELETE_POST":
            let newState = state.slice(0, state.length-1);
            return newState;
        case "DELETE_ALL":
            return [];
        default:
            return state;

    }
}

export default artistReducer;