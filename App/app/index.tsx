import { useRouter } from "expo-router";
import { Image,Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Colors from './../constant/Colors'



export default function Index() {

  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor : Colors.WHITE
        
      }}
    >
      <Image source = {require('./../assets/images/elearn.jpg')} 
      style = {{
        width:'100%',
        height:300,
        marginTop:70
      }}
      />

      <View style = {{
        padding:25,
        backgroundColor:Colors.PRIMARY,
        height:'100%',
        borderTopLeftRadius:35,
        borderTopRightRadius:35
         
      }}>
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          textAlign:'center',
          color:Colors.WHITE,
          fontFamily:'outfit-bold'

        }}>Welcome to EduPath</Text> 
        <Text style={{
          fontSize:20,
          marginTop:20,
          textAlign:'center',
          color:Colors.WHITE,
          fontFamily:'outfit'
        }}>EduPath is your personal education assistant</Text>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push('../Auth/SignUp')}
      >
        <Text style={[styles.buttonText,{color:Colors.PRIMARY}]}>Ready</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => router.push('../Auth/SignIn')}
      >
        <Text style={[styles.buttonText,{color:Colors.PRIMARY}]}>Already have an Account?</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    fontFamily:'outfit',
    marginTop:20,
    borderRadius:10

  },
  buttonText:{
    textAlign:'center',
    fontSize:15
  }

})
