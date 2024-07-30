import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <Image source={require("../assets/man.jpeg")} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signWrap}
          onPress={handleSignup}
        >
          <Text style={styles.signText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1, //screen ki poori widht height lelega
        backgroundColor:colors.white,
        alignItems:"center", //yh container ke andar jo bhi usko center 
        
    },
    logo:{
        height:40,
        width:150,
        marginVertical:30, // us logo ko thora neeche le aayga
    },
    bannerImage:{
        height:250,
        width:231,
        marginVertical:20, // us man ko thora neeche le aayga
    },
    title:{
        fontSize:36,
        fontFamily:fonts.semibold,
        paddingHorizontal:20,
        textAlign:"center",
        color:colors.primary,
        marginTop:40,

    },
    subTitle:{
        fontSize:16,
        textAlign:"center",
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

    loginButtonWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"50%", //container ka 50%
        backgroundColor:colors.primary,
        borderRadius:98,

    },
    loginButtonText:{
color:colors.white,
fontSize:18,
fontFamily:fonts.semibold
    },
    signWrap:{
        justifyContent:"center",
        alignItems:"center",
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