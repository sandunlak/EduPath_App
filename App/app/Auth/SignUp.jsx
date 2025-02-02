import {Image,View , Text,TextInput} from 'react-native'
import React from 'react'

export default function SignUp(){
    return(
        <View style={{
            //display:'flex',
            flex:1,
            
            alignItems:'center',
            marginTop:0,
            backgroundColor:'#fff'
        }}>
         <Image source = {require('./../../assets/images/Logo.jpg')} 
      style = {{
        width:250,
        height:200,
        marginTop:100,
        
      }}
      />
      <Text style={{
        fontSize:30,
        fontFamily:'outfit-bold'
      }} >Craete New Account</Text>

      <TextInput placeholder ='Full Name' />
         
            
        </View>
    )
}



