import { AppRegistry }  from 'react-native'
import React, {Component} from 'react'
import { createStore,bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { combineReducers } from 'redux'

/* akciok  */
const ADD_TO_LIST = 'ADD_TO_LIST'
const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'

const addToList = ({vennivalo,mennyiseg}) =>
 {
  return 
     {
        type: ADD_TO_LIST,
        vennivalo,
        mennyiseg
     }

}
const removeFromList = () =>
 {
   return 
     {
        type: REMOVE_FROM_LIST     
     }

}

/*reducer*/

const initialState = {
  state: []
}

const mainreducer = (state = initialState, action) => {
   switch (action.type) {
        case ADD_TO_LIST:
          return [
                  ...state,
		   {
		      vennivalo: action.vennivalo,
		      mennyiseg: action.mennyiseg
                   }
                 ]
        case REMOVE_FROM_LIST:
          return state
        default:
           return state
       }
}

const rootReducer = combineReducers({mainreducer})

class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
     const {vennivalok } =  this.props
     return (
                 <View><TouchableOpacity>
                 </TouchableOpacity></View>
           )
      }       
}

/* comps/Inputs.js */
const styles = StyleSheet.create({
    button: {
      width: 100,
      height: 30,
      padding: 10,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 3
  }

})

class Inputs extends Component {
  vennivalo : null
  mennyiseg : null
  constructor(props) {
    super(props)
  }
  render () { 
    const {state,onOkClick} = this.props
    return ( 
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Vennivalo</Text>
        <TextInput ref="vennivaloInput"
	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => {this.vennivalo = text}}
           />
        <Text>Mennyiseg</Text>
        <TextInput ref="mennyisegInput"
	style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
           onChangeText={(text) => {this.mennyiseg = text}}
           />

        <TouchableOpacity onPress={onOkClick(this.vennivalo,this.mennyiseg0)} style={styles.button}>
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
  )

}
}

const mapStateToProps = (state) => {
  return {
    vennivalok: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOkClick: (vennivalo,mennyiseg) => {
      dispatch(addToList(vennivalo,mennyiseg))
    }
  }
}

InputsContainer = connect(mapStateToProps,mapDispatchToProps)(Inputs)

VisibleList = connect(mapStateToProps)(List)

/*base.js*/


export default class Obase extends Component {
   render () {
     return (
	      <Provider store={store}>
               <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          	<InputsContainer />
                <VisibleList />
         	</View>
	      </Provider>
            )
    }
}

/*index.android.js*/
let store = createStore(rootReducer)

AppRegistry.registerComponent('husosssom', () => Obase);
