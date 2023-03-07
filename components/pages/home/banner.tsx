import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectValue } from '../../../slices/counterSlice'
import type { RootState } from '../../../store'
const Banner = () => {
    const count = useSelector(selectValue)
    const dispatch = useDispatch()

    return (    
        <div style={{float:'left', maxWidth:1050, width:'100%', backgroundColor:'#F6F6F6', height:200, padding:50}}>           
            <div style={{width:'100%', float:'left'}}>
                <div style={{float:'left', padding:25}}>
                <img 
                    src={'/home/livetourEx.png'}
                    style={{width:300, height:150}}
                />
                </div>
                <div style={{float:'left', padding:25}}>
                <a>
                    <h3>
                    make a change to sell your house using livetour 
                    </h3>
                </a>
                </div>
                <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    >
                    Increment
                    </button>
                    <span>{count}</span>
                    <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;