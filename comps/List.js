import React, { PropTypes } from 'react'

/* lista egy eleme */
const Vennivalo = ({ vennivalo, mennyiseg,elelmiszer }) => (
  <li
    style={{
      color: elelmiszer ? 'red' : 'green'
    }}
  >
    {vennivalo} ({mennyiseg})
  </li>
)

/* lista egy eleme parameter kovetelmenyek */
Vennivalo.propTypes = {
  vennivalo: PropTypes.string.isRequired,
  mennyiseg: PropTypes.string.isRequired,
  elelmiszer: PropTypes.bool.isRequired
}


/* lista */
const List = ({ vennivalok }) => (
  <ul>
    {vennivalok.map(todo =>
      <Vennivalo
        key={vennivalo.id}
        {...todo}
      />
    )}
  </ul>
)

/* lista parameter kovetelmenyek */
List.propTypes = {
  vennivalok: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    elelmiszer: PropTypes.bool.isRequired,
    vennivalo: PropTypes.string.isRequired
    mennyiseg: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired
}

export default List
export default Vennivalo

