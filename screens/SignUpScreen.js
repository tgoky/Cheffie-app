import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../components/home/CustomInput';
import CustomButton from '../components/home/CustomButton';
import SocialSignInButtons from '../components/home/SocialSignInButtons';


const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const SignUpScreen = ({navigation}) => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

     
     const onRegisterPressed = () => {
         console.warn('onRegisterPressed');
         navigation.navigate('ConfirmEmailScreen')
     };

     const onSignInPressed = () => {
        console.warn("onSignInPress");
        navigation.navigate('SignInScreen')
    };

     const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    


     return (
         <ScrollView showsVerticalScrollIndicator={false}>
         <View>
             <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
            
         <View style ={styles.root}>
             <Text style={styles.title}>Create an account </Text>
         <Image
            source={require('../assets/images/cheffy1.jpeg')}
            style={styles.image}
            />

             <CustomInput 
             placeholder="Username" 
             value={username}
             setValue={setUsername}
             />

             <CustomInput 
             placeholder="Email"
             value={email}
             setValue={setEmail}
             />


            <CustomInput 
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry 
             />


            <CustomInput 
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry 
             />

             <CustomButton  text="Register" onPress={() => navigation.navigate("Home")}
             />

             <Text style={styles.text}>By registering, you confirm that you accept our {''}
             <Text style={styles.link}>Terms of Use </Text> and {''}<Text style={styles.link}>Privacy Policy</Text></Text>
            
               <SocialSignInButtons />

              <CustomButton
              text="Have an account? Sign in"
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


     export default SignUpScreen;


