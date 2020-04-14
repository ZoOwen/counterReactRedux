import {INCREMENT, DECREMENT} from '../Actions/CounterActions'

const initialState = {
    cart : 0
}

const counter = (state = initialState, Actions) => {
    switch(Actions.type){
        case INCREMENT :
           return {
            ...state,
            cart : state.cart +1
           }
        case DECREMENT :
            return {
                ...state,
                cart : state.cart -1
            }
        default :
        return state;
    }

}
export default counter