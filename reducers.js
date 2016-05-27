import { combineReducers } from 'redux\native'

/* kezdeti allapot */

const initialState = {
  
  vennivalok: []

}



/* kozert */

const mainreducer = ({state = initialState, action}) => {
  
   switch (action.type) {

      /* hozzaadas a listahoz */
        case ADD_TO_LIST:
      
           return {
              ...state,
                 {
         
          vennivalo: action.vennivalo,

  	           mennyiseg: action.mennyiseg

                 }
	
              }
    
      /* elvetel a listabol*/
        case REMOVE_FROM_LIST:
           return state
      /* alapesetben visszateeres az eredeti state-tel */
    
        default:
      
           return state
  }

       }
}


/* erre talan most nincs is szukseg mert csak egy reducer van */



const rootReducer = combineReducers({mainreducer})



export default rootReducer

