import React from 'react';
import {StyleSheet, SafeAreaView, Image, View, StatusBar, Text, Pressable, TouchableOpacity, } from 'react-native';
import { colorsDark } from 'react-native-elements/dist/config';
import COLORS from '../components/restaurantDetail/colors';
//import COLORS from '../../consts/colors';


const OnBoarding = ({navigation}) => {
    return (
       
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
           <StatusBar translucent backgroundColor={COLORS.red}/>

            <Image
            source={require('../assets/images/cheffy1.jpeg')}
            style={style.image}
            />
            <View style={style.indicatorContainer}>
                <View style={style.indicator}/>
                <View style={style.indicator}/>
                <View style={[style.indicator, style.indicatorActive]}/>
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 20}}></View>
            <View>
        {/* <View>
                <BackgroundImg />
                </View> */}
                 <Text style={style.title}>Cheffie </Text>
                 <Text style={style.title}>The Chef's Hub</Text>
             </View>
             <View style={{marginTop: 10}}>
                 <Text style={style.textStyle}>Order a Chef with us today in a few clicks</Text>
                 <Text style={style.textStyle}>Book and manage meal plans</Text>
             </View>
             <View style={{flex:1,justifyContent: "flex-end",paddingBottom: 40}}>
             <View>
            <TouchableOpacity  style={{ backgroundColor: "#cd853f",
     alignItems: "center",
     left: 17,
     top: 34,
     width: 360,
     borderRadius: 30,}}>
               <Pressable onPress={() => navigation.navigate("SkipScreen")}>
               <View style={style.btn}>
                     <Text style={{color: COLORS.dark, fontSize: 18, fontWeight: "bold",}}>Welcome to Cheffie App</Text>
                 </View>
               </Pressable>
               </TouchableOpacity>
               </View>
             </View>
         </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: "orange",
        marginHorizontal:5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: COLORS.dark,
    },
    title: {
        fontSize:38,
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Futura",
    },
    textStyle: {
        fontSize: 16,
        color: COLORS.grey,
        alignItems: "center",
        alignSelf: "center",
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: "#cd853f",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnBoarding;