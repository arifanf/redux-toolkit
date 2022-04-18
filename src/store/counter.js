import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 5
    },
    reducers: {
        increament: state => {
            state.count += 1
        },
        decreament: state => {
            state.count -= 1
        },
        increaseByNumber: (state, action) => { 
            state.count += +action.payload
        }
    }
})

export default counterSlice