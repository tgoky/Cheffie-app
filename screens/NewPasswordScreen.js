import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../components/home/CustomInput';
import CustomButton from '../components/home/CustomButton';
import SocialSignInButtons from '../components/home/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = ({navigation}) => {
  
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
   
   

     
     const onSubmitPressed = () => {
        navigation.navigate('Home')
     };

     const onSignInPressed = () => {
        console.warn("onSignInPress");
        navigation.navigate('SignInScreen')

    };


     return (
         <ScrollView showsVerticalScrollIndicator={false}>
         <View>
             <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
            
         <View style ={styles.root}>
             <Text style={styles.title}>Reset your Password </Text>
       

             <CustomInput placeholder="Enter your new password" 
             value={newPassword} setValue={setNewPassword} />

          

             <CustomButton  text="Submit" onPress={() => navigation.navigate("Home")}
             />

              <CustomButton
              text="Back to Sign in"
              onPress={onSignUpPressed}
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


     export default NewPasswordScreen;


