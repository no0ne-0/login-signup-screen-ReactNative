import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation=useNavigation();
    const handleLogin=()=>{
        navigation.navigate("LOGIN");
    }
    const handleSignup=()=>{
        navigation.navigate("SignUp");
    }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}/>
      <Image source={require("../assets/man.jpeg")} style={styles.man}/>
      <Text style={styles.text}>Home Screen Page Hai Bhai Yh</Text>
      <Text style={styles.sub}>Aao Kuch Toofani karte Hai</Text>
    
    <View style={style.buttonContainer}>
<TouchableOpacity style={styles.loginWrap} onPress={handleLogin}>
    <Text style={styles.loginText}>Login</Text>
</TouchableOpacity >
<TouchableOpacity style={styles.signWrap} onPress={handleSignup}>
    <Text style={styles.signText}>Sign-Up</Text>
</TouchableOpacity>

    </View>
    </View>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1, //screen ki poori widht height lelega
        backgroundColor:colors.white,
        alignItems:"centre", //yh container ke andar jo bhi usko centre 
        
    },
    logo:{
        height:40,
        width:150,
        marginVertical:30, // us logo ko thora neeche le aayga
    },
    man:{
        height:250,
        width:231,
        marginVertical:20, // us man ko thora neeche le aayga
    },
    title:{
        fontSize:36,
        fontFamily:fonts.semibold,
        paddingHorizontal:20,
        textAlign:centre,
        color:colors.primary,
        marginTop:40,

    },
    sub:{
        fontSize:16,
        textAlign:centre,
        color:colors.secondary,
        fontFamily:fonts.medium,
        paddingHorizontal:20,
        marginVertical:20, 
    },
    buttonContainer:{
        flexDirection:"row",//horizontal le aayga dono ko 
        marginTop:20,
        borderWidth:2,
        borderColor:colors.primary,
        width:80,
        height:60,
        borderRadius:100,
    },

    loginWrap:{
        justifyContent:"centre",
        alignItems:"centre",
        width:"50%", //container ka 50%
        backgroundColor:colors.primary,
        borderRadius:98,

    },
    loginText:{
color:colors.white,
fontSize:18,
fontFamily:fonts.semibold
    },
    signWrap:{
        justifyContent:"centre",
        alignItems:"centre",
        width:"50%", //container ka 50%
        backgroundColor:colors.primary,
        borderRadius:98,
    },
    signText:{
        color:colors.white,
        fontSize:18,
        fontFamily:fonts.semibold
    }
})