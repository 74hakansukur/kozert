import React, { PropTypes,View,Text,ListView } from 'react-native'



const styles = StyleSheet.create({ 
  
      row: { flexDirection: 'row', 
             justifyContent: 'center', 
             padding: 10,
             backgroundColor: '#F6F6F6', }, 
  
      text: { flex: 1, }, 

});



/* lista */


class List extends React.Component {
  
   
   render = () => {
  
      vennivalok.map(function (v) {  
         <Text>{v.vennivalo} ({v.mennyiseg}) </Text>
      }       
   }

}



export default List

