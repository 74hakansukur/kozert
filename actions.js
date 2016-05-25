/* akciok  */

export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FOOD: 'SHOW_FOOD',
  SHOW_NOT_FOOD: 'SHOW_NOT_FOOD'
}

/* hozzaadas a listahoz */
export const addToList = (vennivalo,mennyiseg,elelmiszer) =>
{
 return 
   {
      type: ADD_TO_LIST,
      vennivalo,
      mennyiseg,
      elelmiszer
   }
}

/* torles */
export const removeFromList = (vennivaloid) =>
{
  return
    {
      type: REMOVE_FROM_LIST,
      vennivaloid
    }
}

export const setVisibilityFilter = (filter) =>
{
  return 
    { 
      type: SET_VISIBILITY_FILTER, 
      filter 
    }
}


