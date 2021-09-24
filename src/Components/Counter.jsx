import React, { useReducer } from 'react'
import {counterReducer, initialState } from '../Reducers/counterReducer'
import { types } from '../types/types'

export default function Counter() {

    const [counter, dispatch] = useReducer(counterReducer, initialState)

    console.log(counter)

    const habdleIncrement = (e) =>{
        const {checked} = e.target;
        dispatch({type:types.increment,increment:checked})
    }

    const handleCountInterval = (e) =>{
        const {value} = e.target;
        dispatch({type:types.set_interval , countInterval:value})
    }
    const handleCount = (e) =>{
        if(counter.increment){
            dispatch({type:types.increase_count})
        }else{
            dispatch({type:types.decrease_count})
        }
    }
    const handleRestart = (e) =>{
        dispatch({type:types.restart})
    }
    
    return (
        <div className="contador">
            <h1>Counter:{counter.count}</h1>

            <div className="inputs">
                <input
                checked={counter.increment}
                type="checkbox"
                id="checkInput"
                onChange={habdleIncrement}
                />
                <label htmlFor="checkInput">Incrementar</label>
            </div>

                
            <div className="inputs">
                <label htmlFor="interval">Intervalo</label>
                <input defaultValue={counter.count} type="number" name="" id="interval" onChange={handleCountInterval}/>
            </div>

               

            <div className="buttons">
                <button onClick={handleCount}>{counter.increment?'Incrementar':'Decrementar'}</button>
                <button onClick={handleRestart}>Reiniciar</button>
            </div>
        </div>
    )
}
