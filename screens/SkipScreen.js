import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import {BackgroundImge } from '../components/restaurantDetail/backgroundImg'

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
       
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const Newimg = () => {
    < BackgroundImge />
    
}

const OnboardingScreen = ({navigation}) => {
    return (
        
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate("SignInScreen")}
        onDone={() => navigation.navigate("SignInScreen")}
        pages={[
          {
            backgroundColor: '#cd853f',
            image: <Image source={require('../assets/images/onboarding-img1.png')} />,
            title: 'Connect to our Chefs',
            subtitle: 'A New Way To Connect With Cheffie',
          },
          {
            backgroundColor: '#29241f',
            // ImageBackground: 
            // <ImageBackground source={Newimg} />,
              
            image: <Image source={require('../assets/images/onboarding-img2.png')} />,
            title: 'Share Your MealPlan',
            subtitle: 'Share Your MealPlans With Similar Kind of People',
          },
          {
            backgroundColor: '#cd853f',
            image: <Image source={require('../assets/images/onboarding-img3.png')} />,
            title: 'Delivery is now Swift!',
            subtitle: "You are never hungry with Cheffie",
          },
        ]}
      />
    );
   
    <BackgroundImge />
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});