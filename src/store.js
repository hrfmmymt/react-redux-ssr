/* @flow */

import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'

// middleware
import thunk from 'redux-thunk'

// reducer
import * as reducers from './reducers'

export function configureStore (history: string, initialState: boolean) {
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  )

  return store
}
