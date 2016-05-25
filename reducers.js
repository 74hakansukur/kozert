/* visfilters */
import { VisibilityFilters } from './actions'

/* kezdeti allapot */
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  vennivalok: []
}

/* kozert */
function kozertApp(state = initialState, action) {
  switch (action.type) {
    /* filter allitas */
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    /* hozzaadas a listahoz */
    case ADD_TO_LIST:
      return Object.assign
	(
	  {}, state, 
	  {
	    vennivalo: action.vennivalo,
	    mennyiseg: action.mennyiseg
            elelmiszer: action.elelmiszer
	  }
	)
    /* torles a listarol */
    case REMOVE_FROM_LIST:
      return Object.assign({}, state, {})
    /* alapesetben visszateeres az eredeti state-tel */
    default:
      return state
  }
}
