import {Image,View , Text,TextInput, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp(){
    const router=useRouter();
    const [fulName,setFulName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const CreateNewAccount=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(resp=>{
            const user =resp.user;
            console.log(user)
            //Save user to Database

        })

    }
    return(
        <View style={{
            //display:'flex',
            flex:1,
            
            alignItems:'center',
            marginTop:0,
            padding:25,
            backgroundColor:'#fff'

        }}>
         <Image source = {require('./../../assets/images/Logo.jpg')} 
      style = {{
        width:250,
        height:200,
        marginTop:30,
        
      }}
      />
      <Text style={{
        fontSize:30,
        fontFamily:'outfit-bold'
      }} >Craete New Account</Text>

      <Text style={{
        fontSize:18,
        fontFamily:'outfit-bold',
        color:'blue',
        marginTop:20
      }} >Enter Full name</Text>
      <TextInput placeholder ='Full Name' onChangeText={(value)=>setFulName(value)} style={styles.TextInput} />
      <Text style={{
        fontSize:18,
        fontFamily:'outfit-bold',
        color:'blue',
        marginTop:20
      }} >Enter Email</Text>
      <TextInput placeholder ='Email' onChangeText={(value)=>setEmail(value)} style={styles.TextInput} />
      <Text style={{
        fontSize:18,
        fontFamily:'outfit-bold',
        color:'blue',
        marginTop:20
      }} >Enter Password</Text>
      <TextInput placeholder ='Password' onChangeText={(value)=>setPassword(value)} style={styles.TextInput} />

      <TouchableOpacity
      onPress={CreateNewAccount}
      style={{
        padding:15,
        backgroundColor:'#87CEEB',
        width:"40%",
        marginTop:25,
        borderRadius:10
      }}
      >
        <Text style={{
            fontFamily:'outfit',
            fontSize:15,
            textAlign:'center'
        }}>Create Account</Text>

        
      </TouchableOpacity>
      <View style={{
        display:'flex',
        flexDirection:'row',gap:5,
        marginTop:10
      }}>
      <Text
      style={{
        fontFamily:'outfit'
      }}>Already have an account?

            <Pressable
            onPress={()=>router.push('../Auth/SignIn')}
            >
                <Text style={{
                    color:'blue',
                    fontFamily:'outfit-bold'
                }}>Sign in Here</Text>
            </Pressable>
        </Text>
        </View>
         
            
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput:{
        borderWidth:1,
        width:'100%',
        padding:18,
        fontSize:18,
        marginTop:1,
        borderRadius:8,
        color:'#000000'

    }
})




