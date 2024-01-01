import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'


const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Hello, Lets begin Coding ',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );}
const FlatCards = () => {

   
  return (

    <View style={styles.container}>
         <Text style={styles.headingText}>DAY 1  JAN 2024 react-native coding !!!</Text>
    <TouchableOpacity style={styles.Toast}
    onPress={showToast}>
      <Text  style={styles.ToastText}>Show Toast</Text>
    </TouchableOpacity>
    
  </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    container:{
       
    marginTop:'50%'
    },
headingText:{
   fontSize:24,
   fontWeight:'bold',
   textAlign:'center',
  padding:20,
},
Toast:{
        backgroundColor: '#3498db',
        borderRadius: 8,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        elevation: 5,
        width:'70%',
        padding:20, 
        marginLeft:'15%'// Android elevation 
},
ToastText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
},

})