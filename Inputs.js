
import React, {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


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

});



const Inputs = () => 
{
  
    
    return 
  (
    
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Vennivalo</Text>
      
        <TextInput ref="vennivaloInput"
	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           
           value=""/>
      
        <Text>Mennyiseg</Text>

        <TextInput ref="mennyisegInput"
	style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
            
	
           value=""/>
        
        <TouchableOpacity onPress={() => onOkClick(?,?)} style={styles.button}>
          <Text>Ok</Text>
      
        </TouchableOpacity>
     
      </View>
  )

}



export default Inputs

