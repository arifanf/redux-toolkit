import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from './store/counter'

function App() {

  const count = useSelector( store => store.counter.count )
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={ () => dispatch( counterSlice.actions.increament() ) }>INCREAMENT</button>
      <button onClick={ () => dispatch( counterSlice.actions.decreament() ) }>DECREAMENT</button>
      <button onClick={ () => dispatch( counterSlice.actions.increaseByNumber(5) ) }>INCREAMENT by 5</button>
      <button onClick={ () => dispatch( counterSlice.actions.increaseByNumber(10) ) }>INCREAMENT by 10</button>
    </div>
  )
}

export default App
