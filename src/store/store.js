import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter"
import burgerSlice from "./burger"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        burger: burgerSlice.reducer
    }
})

export default store