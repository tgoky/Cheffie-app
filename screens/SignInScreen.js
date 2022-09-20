import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions
     , SafeAreaView, StatusBar, ScrollView, TextInput } from 'react-native';
import CustomInput from '../components/home/CustomInput';
import CustomButton from '../components/home/CustomButton';
import SocialSignInButtons from '../components/home/SocialSignInButtons';


const SignInScreen = ({navigation}) => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     const {height} = useWindowDimensions();


     const onSignInPressed = () => {
         console.warn("Sign in");
         navigation.navigate('Home');
     };

     const onForgotPasswordPressed = () => {
          console.warn('onForgotPasswordPressed');
          navigation.navigate('ForgotPassword');
     };

     const onSignUpPressed = () => {
          console.warn('onSignUpPress');
          navigation.navigate('SignUpScreen');
     };
    


     return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
             <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
             <StatusBar translucent backgroundColor="white"/>
         <View style ={styles.root}>
         <Image
            source={require('../assets/images/cheffy1.jpeg')}
            style={styles.image}
            />

             <CustomInput  placeholder="Username" 
            value={username} setValue={setUsername} />

             <CustomInput  placeholder="Password" value={password} setValue={setPassword} 
             secureTextEntry 
             />

             <CustomButton  text="Sign In" onPress={() => navigation.navigate("Home")}
             />

             <CustomButton  text="Forgot password"
             onPress={() => navigation.navigate("ForgotPassword")} type="TERTIARY"/>

            
           <SocialSignInButtons /> 

              <CustomButton
              text="Don't have an account? Create one"
              onPress={() => navigation.navigate("SignUpScreen")}
              type="TERTIARY"
              />

         </View>
         </SafeAreaView>
         </View>
         </ScrollView>
     );
     };

     const styles = StyleSheet.create({
         root: {
             alignItems: 'center',
             height: 420,
             borderBottomLeftRadius: 400,
        justifyContent: 'center',
             padding: 12,
         },
         logo: {
            alignItems: 'center',
            height: 40,
            width: '100%',
            borderBottomLeftRadius: 100,
            
           
       justifyContent: 'center',
            
         },
         image: {
            height: 690,
            width: '100%',
           resizeMode: 'repeat'
      
        },
     });


     export default SignInScreen;


