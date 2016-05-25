import React from 'react'
import { connect } from 'react-redux'
import { addToList } from '../actions'

let AddToList = ({ dispatch }) => 
{
  let input

  return 
  (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input1.value.trim() || !input2.value.trim()) 
          {
             return
          }
        dispatch(addToList(input1.value,input2.value,input3.value))
        input1.value = ''
        input2.value = ''
      }}>
        <div>
         <span>Vennivalo</span>
	 <input ref={node => {
          input1 = node
         }} />
        </div>
	<div>
         <span>Mennyiseg</span>
	 <input ref={node => {
          input2 = node
         }} />
        </div>
	<div>
         <span>Elelmiszer?</span>
          <input type=checkbox ref={node => {
           input3 = node
          }} />
        </div>
        <button type="submit">
          Hozzaadas a vennivalokhoz
        </button>
      </form>
    </div>
  )
}
AddToList = connect()(AddToList)

export default AddToList

