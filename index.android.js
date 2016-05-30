import { AppRegistry }  from 'react-native'
import React, {Component} from 'react'
import { createStore,bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ListView} from 'react-native'
import { combineReducers } from 'redux'
/*import immutable from 'immutable'*/

/* akciok  */
const ADD_TO_LIST = 'ADD_TO_LIST'
const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'

const addToList = (vennivalo,mennyiseg) =>
 {
  return {
        type: ADD_TO_LIST,
        vennivalo,
        mennyiseg
     }

}
const removeFromList = () =>
 {
   return { 
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

/*https://medium.com/front-end-hacking/react-native-immutable-listview-example-78662fa64a15#.5mradvh15*/

const Row = ({vennivalo, mennyiseg}) => (
    <View style={styles.row}>
        <Text>{vennialo} ({mennyiseg})</Text>
    </View>
)
const renderRow = (rowData) => (
    <Row vennivalo={rowData.get('vennivalo')}
         mennyiseg={rowData.get('mennyiseg')} />
)

const countries = [
    {vennivalo: 'China', mennyiseg: '1,393,783,836'},
    {vennivalo: 'India', mennyiseg: '1,267,401,849'},
    {vennivalo: 'U.S.A.', mennyiseg: '322,583,006'},
    {vennivalo: 'Indonesia', mennyiseg: '252,812,245'},
    {vennivalo: 'Brazil', mennyiseg: '202,033,670'}
]

class List extends Component {
    constructor() {
        super()
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {r1 !== r2}
        })
        this.state = {
            dataSource: ds.cloneWithRows(countries)
        }
    }
    render() {
        return (
            <ListView style={styles.list}
                      dataSource={this.state.dataSource}
                      renderRow={renderRow} />
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

        <TouchableOpacity onPress={()=>onOkClick(this.vennivalo,this.mennyiseg)} style={styles.button}>
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

InputsContainer = connect()(Inputs)

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

AppRegistry.registerComponent('husossom', () => Obase);
