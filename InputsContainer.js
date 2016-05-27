import { connect } from 'react-redux/native'
import { addToList } from '../actions'
import Inputs from '../comps/Inputs'


const mapDispatchToProps = (dispatch) => {
  return {
    onOkClick: (vennivalo,mennyiseg) => {
      dispatch(addToList(vennivalo,mennyiseg,1))
    }
  }
}

export default const InputsContainer = connect(
  null,
  mapDispatchToProps
)(Inputs)

export default InputsContainer
