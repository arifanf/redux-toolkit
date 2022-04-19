import React from 'react'
import IngredientList from './IngredientList'
import IngredientController from './IngredientController'

const Burger = () => {
  return (
    <div className="container bg-purple-400 mt-8 px-4 py-3 rounded-md">
        <h2 className="text-center text-2xl font-bold py-2">Burger</h2>
        <IngredientList />
        <IngredientController />
    </div>
  )
}

export default Burger