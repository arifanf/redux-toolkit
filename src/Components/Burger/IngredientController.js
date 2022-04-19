import React from 'react'
import { useDispatch } from 'react-redux'
import burgerSlice from '../../store/burger'

const IngredientController = () => {

    const dispatch = useDispatch()

  return (
    <div className="text-center">
        <button className="py-1 px-2 mr-3 my-2 bg-yellow-100 rounded-sm text-purple-400 font-bold" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'patty' }) )}>Add Patty</button>
        <button className="py-1 px-2 mr-3 my-2 bg-yellow-100 rounded-sm text-purple-400 font-bold" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'lettuce' }) )}>Add Lettuce</button>
        <button className="py-1 px-2 mr-3 my-2 bg-yellow-100 rounded-sm text-purple-400 font-bold" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'cheese' }) )}>Add Cheese</button>
        <button className="py-1 px-2 mr-3 my-2 bg-yellow-100 rounded-sm text-purple-400 font-bold" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'tomato' }) )}>Add Tomato</button>
    </div>
  )
}

export default IngredientController