import { connect } from 'react-redux/native'


import List from '../comps/List'




const mapStateToProps = (state) => {
  return {
    vennivalok: state.vennivalok
  }
}


const VisibleList = connect(mapStateToProps)(List)

export default VisibleList