import React, {View} from 'react-native'

import InputsContainer from '../containers/InputsContainer'

import VisibleList from '../containers/VisibleList'



export default class App extends React.Component {
  
    render () {
    
      return 
     
       {
      
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <InputsContainer />
          <VisibleList />
      
         </View>
     
       }
   
   }

}
