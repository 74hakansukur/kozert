import React, {Component} from 'react'

import { createStore } from 'redux'

import { Provider } from 'react-redux/native'


import rootReducer from './reducers'

import App from './comps/App'



let store = createStore(rootReducer)



export default class Base extends Component {
  
   render () {
   
     return (
    
        <Provider store={store}>
 
          {() => <App />} 
        </Provider>
)
    }

}


