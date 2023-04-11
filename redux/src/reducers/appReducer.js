import { ADD, DELETE, EDIT } from '../actions/appActions';


export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            return state.filter(currentElement =>
                currentElement.id !== action.payload.id);
        case EDIT:
            return state.map((currentElement) => {
              if (currentElement.id !== action.payload.id) {
                return currentElement;
                }
                
                const { author, coomment, rate } = action.payload;
                
                return ({
                    author,
                    id: currentElement.id,
                    coomment,
                    rate,
                })
            });
        
        default:
            console.log("Nie ma takiej akcji")
            return state;
    }
}
 
