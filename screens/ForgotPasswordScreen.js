import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../components/home/CustomInput';
import CustomButton from '../components/home/CustomButton';
import SocialSignInButtons from '../components/home/SocialSignInButtons';


const ForgotPasswordScreen = ({navigation}) => {
  
    const [username, setUsername] = useState('');
    const [forgotPassword, setForgotPassword] = useState('');
   
   

     
     const onConfirmPressed = () => {
         console.warn('onConfirmPressed');
         navigation.navigate('ConfirmEmailScreen')
     };

     const onSignInPressed = () => {
        console.warn("onSignInPress");
        navigation.navigate('SignInScreen')
    };

    const onResendPressed = () => {
        console.warn('onResendPress');
    };

    


     return (
         <ScrollView showsVerticalScrollIndicator={false}>
         <View>
             <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
            
         <View style ={styles.root}>
             <Text style={styles.title}>Reset your Password </Text>
       

             <CustomInput placeholder="Username" 
             value={username} setValue={setUsername} />

          

             <CustomButton  text="Confirm" onPress={() => navigation.navigate("Home")}
             />

              <CustomButton
              text="Back to Sign in"
              onPress={onSignInPressed}
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
         
         image: {
            height: 690,
            width: '100%',
           resizeMode: 'repeat'
      
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#051C60',
            margin: 10.
        },
        text: {
          color: 'gray',
          marginVertical: 10,
        },
        link: {
            color: '#FDB075'
        },
     });


     export default ForgotPasswordScreen;


