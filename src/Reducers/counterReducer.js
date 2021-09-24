import {types} from '../types/types'

export const initialState = {
    count:0,
    countInterval:1,
    increment:true
}

export const counterReducer = (state,action) =>{

    switch (action.type) {
        case types.increment:
            return {...state, 
            increment:action.increment}
        
        case types.set_interval:
            return {...state, 
                countInterval:parseInt(action.countInterval)}
        
        case types.increase_count:
            return {...state, 
                count:state.count + state.countInterval}

        case types.decrease_count:
            return {...state, 
                count:state.count - state.countInterval}
       
        case types.restart:
            return initialState

        default:
            return state
    }
}
