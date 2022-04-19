import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from './store/counter'
import Burger from './Components/Burger/Burger'

function App() {

  const count = useSelector( store => store.counter.count )
  const dispatch = useDispatch()

  return (
    <div className="App container">
      <h2 className="text-center text-lg font-bold py-2 bg-blue-300 mt-3">Counter</h2>
      <h1 className="text-4xl font-bold mt-5 text-center">{count}</h1>
      <div className="text-center py-3">
        <button className="py-1 px-2 mx-2 my-3 border-0 bg-blue-500 shadow-xl rounded-sm text-white font-semibold" onClick={ () => dispatch( counterSlice.actions.increament() ) }>INCREAMENT</button>
        <button className="py-1 px-2 mx-2 my-3 border-0 bg-blue-500 shadow-xl rounded-sm text-white font-semibold" onClick={ () => dispatch( counterSlice.actions.decreament() ) }>DECREAMENT</button>
        <button className="py-1 px-2 mx-2 my-3 border-0 bg-blue-500 shadow-xl rounded-sm text-white font-semibold" onClick={ () => dispatch( counterSlice.actions.increaseByNumber(5) ) }>INCREAMENT by 5</button>
        <button className="py-1 px-2 mx-2 my-3 border-0 bg-blue-500 shadow-xl rounded-sm text-white font-semibold" onClick={ () => dispatch( counterSlice.actions.increaseByNumber(10) ) }>INCREAMENT by 10</button>
      </div>
    
      <hr />
      <Burger />
    </div>

    
  )
}

export default App
