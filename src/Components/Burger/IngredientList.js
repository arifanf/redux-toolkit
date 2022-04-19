import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import burgerSlice from '../../store/burger'

const IngredientList = () => {

    const ingredient = useSelector( store => store.burger.ingredient )
    const totalPrice = useSelector( store => store.burger.totalPrice )
    const dispatch = useDispatch()

  return (
    <div>
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-3 mb-5 px-5">
            <li className="px-3 py-4 mx-3 my-4 bg-slate-100 rounded-sm shadow-lg">
                <div className="text-center my-3 text-lg font-bold text-red-800">Patty</div> 
                <div className="text-center my-3 text-2xl font-semibold">{ingredient.patty}</div>
                <div className="text-center mx-7">
                    <button className="px-2.5 mr-3 rounded-md text-white text-lg font-bold bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'patty' }) )}>-</button>
                    <button className="px-2 rounded-md text-white text-lg font-bold bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'patty' }) )}>+</button>
                </div>
            </li>
            <li className="px-3 py-3 mx-3 my-4 bg-slate-100 rounded-sm shadow-lg">
                <div className="text-center my-3 text-lg font-bold text-green-600">Lettuce</div> 
                <div className="text-center my-3 text-2xl font-semibold">{ingredient.lettuce}</div>
                <div className="text-center mx-7">
                    <button className="px-2.5 mr-3 rounded-md text-white text-lg font-bold  bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'lettuce' }) )}>-</button>
                    <button className="px-2 rounded-md text-white text-lg font-bold bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'lettuce' }) )}>+</button>
                </div>
            </li>
            <li className="px-3 py-2 mx-3 my-4 bg-slate-100 rounded-sm shadow-lg">
                <div className="text-center my-3 text-lg font-bold text-yellow-500">Cheese</div> 
                <div className="text-center my-3 text-2xl font-semibold">{ingredient.cheese}</div>
                <div className="text-center mx-7"> 
                    <button className="px-2.5 mr-3 rounded-md text-white text-lg font-bold  bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'cheese' }) )}>-</button>
                    <button className="px-2 rounded-md text-white text-lg font-bold bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'cheese' }) )}>+</button>
                </div>
            </li>
            <li className="px-3 py-2 mx-3 my-4 bg-slate-100 rounded-sm shadow-lg"> 
                <div className="text-center my-3 text-lg font-bold text-red-600">Tomato</div> 
                <div className="text-center my-3 text-2xl font-semibold text-red-600">{ingredient.tomato}</div>
                <div className="text-center mx-7 mt-5">
                    <button className="px-2.5 mr-3 rounded-md text-white text-lg font-bold  bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'tomato' }) )}>-</button>
                    <button className="px-2 rounded-md text-white text-lg font-bold bg-purple-400" onClick= { () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'tomato' }) )}>+</button>
                </div>
            </li>
        </ul>
        <h5 className='text-2xl font-bold mb-2 text-center'>Total Price: Rp {totalPrice}</h5>
    </div>
  )
}

export default IngredientList