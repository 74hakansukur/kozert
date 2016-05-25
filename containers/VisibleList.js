import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import List from '../components/List'

/* visszaadja a megadott vennivalokat a szuro szerint */
const getVisible = (vennivalok, filter) => 
{
  switch (filter) 
   {
    /*osszes*/ 
    case 'SHOW_ALL':
      return vennivalok
    /* kaja */
    case 'SHOW_FOOD':
      return vennivalok.filter(t => t.elelmiszer)
    /* nem kaja */
    case 'SHOW_NOTFOOD':
      return vennivalok.filter(t => !t.elelmiszer)
  }
}

/* adott allapot vennivaloit keri vissza */
const mapStateToProps = (state) => {
  return {
    vennivalok: getVisible(state.vennivalok, state.visibilityFilter)
  }
}


const VisibleList = connect(
  mapStateToProps
)(List)

export default VisibleList
