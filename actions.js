/* akciok  */


export const ADD_TO_LIST = 'ADD_TO_LIST'

export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'







/* hozzaadas a listahoz */

export const addToList = (vennivalo,mennyiseg) =>
 {
 
   return 
   
     {
      
        type: ADD_TO_LIST,
      
        vennivalo,
      
        mennyiseg,
         
     }

}




/* elvetel a listabol */

export const removeFromList = () =>
 {
 
   return 
   
     {
      
        type: REMOVE_FROM_LIST,
      
             
     }

}


/*
 egy state pl.:
 
{

  {
     vennivalo: 'alma',
     mennyiseg: '1 kg',
  }
  {
     vennivalo: 'kenyer',
     mennyiseg: ' 1/2 kilo',
  }
}

   ket akcio kell action.js
     - hozzaadas
     - eltavolitas

   megjelenitesi komponensek
     - lista comps/List.js
     - beviteli resz ket inputtal es egy gombbal comps/Inputs.js

   konténerek:
     - lista megjelenito
     


*/