import React, { useState } from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import About from "../components/restaurantDetail/About";
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';
import { useSelector } from "react-redux";
import { Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

//import { Row2, Row3, Row4, Row5, Row6, Row7} from './restaurantDetail/imageRow';

const title = 'Chef Niniola Kitchen' ;
const sourcy = require('../assets/images/badchef.jpg')








export default function ChefProfile(props) {
    const [activeTab, setActiveTab] = useState("Follow");
    const Following = (props) => (
        <View>
        <View style={{  marginleft: 14, alignSelf: "left", margin: 23, flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"}}>
        <View>
                <Text style={{alignSelf: "center", marginLeft: 1}}>14</Text>
                <Text style={{alignSelf: "center", marginLeft: 1, fontWeight:"bold"}}>Following</Text>
        </View>
        </View>
        </View>
       );
       
       const Followers = (props) => (
       <View style={{   marginRight:4, alignSelf: "right", top: 40,flexDirection: "row",
       alignItems: "center",
       justifyContent: "flex-start"}}>
       <View>
              <Text style={{alignSelf: "center", marginLeft: 1, fontSize: 14}}>4149</Text>
              <Text style={{alignSelf: "center", marginLeft: 1, fontWeight: "bold", }}>Followers</Text>
       </View>
       </View>
       );
       
       const Likes = (props) => (
        <View style={{ margin: 2, top: 45, flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start", }}>
        <View>
            <Text style={{alignSelf: "center",  margin: 1}}>
                26.8k
            </Text>
            <Text style={{alignSelf: "center",  fontWeight: "bold" ,margin: 1, }}>
                Likes
            </Text>
        </View>
        </View>
       );

      

const {items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
 
 
    return (
        <SafeAreaView>
        <ScrollView>
        <View>
            <Text style={{fontSize: 24, alignSelf: "center", margin: 20}}>{title}{restaurantName}</Text>
            <Divider width={0.5} orientation= "vertical" style={{marginHorizontal: 20,  borderBottomColor: 'black',
    borderBottomWidth: 1,}}/>
        </View>
        <View style={{backgroundColor: "gray", 
            padding:12,height: 120,
              width: 120,
             borderRadius: 120, alignSelf: "center", margin: 4,}}><Image source={require('../assets/images/badchef.jpg')} 
             style={{height: 120, width:120, borderRadius: 120, alignSelf: "center", margin: -12}}/></View> 
        <View>
            <Text style={{fontSize: 13, alignSelf: "center", margin: 2, fontWeight:"bold" }}>@{title}</Text>
        </View>
        <View>
<View>
    <View>
    <View style={{left:24, top:2}}>
     <Following />   
     </View>
     </View>
     <View style={{margin: 35, top: -125, left: 125}}>
     <Followers />
         </View> 
          <View  style={{margin: 35, top: -233, left: 245}}>
          <Likes/>
          </View>
          </View>
        </View>
        <View style={{ margin: 35, top: -240, right: 90, flexDirection: "row", alignSelf: "center"}}>
            <Followbutton text="Follow" btnColor="black" textColor="white"
            activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
        <View style={{ top: -310, left: 10, flexDirection: "row", alignSelf: "center"}}>
            <Instabutton />
        </View>
        <View style={{top: -375, left: 185, flexDirection: "row", marginLeft: 30, padding: 30, paddingHorizontal:30,}}>
            <Boxed  />
            <Text style={{alignSelf:"center",left: -284, fontSize: 11, fontWeight: "bold", top:36, alignItems: "center", justifyContent: "center"}}>A Chef house with a difference, contact us now !</Text>
        </View>
   
        <View>
        <Divider width={1} orientation= "vertical" style={{marginHorizontal: 20, top: -360,  borderBottomColor: 'black',
    borderBottomWidth: 0.3,}}/>
        </View>
        <View style={{ top: -354,  flexDirection:"row"}}>
            <Row />
            <Row2 />
            <Row3 />

        </View>
        <View style={{ top: -354,  flexDirection:"row"}}>
            <Row4 />
            <Row5 />
            <Row6 />

        </View>
        <View style={{ top: -354,  flexDirection:"row"}}>
            <Row7 />
            <Row8 />
            <Row9 />

        </View>
        </ScrollView>

      
        </SafeAreaView>
    );
}


const Followbutton = (props) => (
    <TouchableOpacity style={{ backgroundColor: props.activeTab === props.text ? "black": "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    width: 120,
    borderRadius: 30,}}
    onPress={() => props.setActiveTab(props.text )}>
 <Text style={{ color: props.activeTab === props.text ? "white": "black", fontSize: 15, fontWeight: "900", textAlign: "center"}}>{props.text}</Text>
 </TouchableOpacity>
   );

const Instabutton = (props) => (
<TouchableOpacity style={{ backgroundColor: props.activeTab == props.text ? "white": "black",
paddingVertical: 6,
paddingHorizontal: 16,
borderRadius: 30,}}
onPress={() => props.setActiveTab(props.text )}>
 <Text> <Ionicons name='call' size={30} />{props.text}</Text>
    </TouchableOpacity>
);

const Boxed = (props) => (
<View>
<View style={{ backgroundColor:"gray", height:30, width: 104, 
  margin: 2, 
paddingTop: 30, borderToLeftRadius:30, borderRadius:30, borderColor:30, justifyContent:"center"}}

>
 
</View>
  
<Text style={{color:"white", textAlign: "center", margin: -23, fontSize: 13, fontWeight: "bold"}} >Place Order</Text>
</View>

);

const Row = (props) => (
    <View >
  
        <Image source={require('../assets/images/row1.jpg')} style={{height: 130, width:130, borderColor: "black", borderRadius: 2, borderWidth: 1}}></Image>
    </View>
  
);


export const Row2 = (props) => (
    <View >
  
    <Image source={require('../assets/images/row2.jpg')} style={{height: 130, width:130, borderColor: "black", borderRadius: 2, borderWidth: 1}}></Image>
</View>
);

export const Row3 = (props) => (
  <View>
      <Image source={require('../assets/images/row3.jpg')} style={{height: 130, width:130, borderColor:"black"}}></Image>
  </View>
);

export const Row4 = (props) => (
    <View>
    <Image source={require('../assets/images/row4.jpg')} style={{height: 130, width: 130, borderColor: "black"}}></Image>
</View>
);

export const Row5 = (props) => (
<View>
      <Image source={require('../assets/images/row5.jpg')} style={{height: 130, width: 130, borderColor:"black"}}></Image>
  </View>
);

export const Row6 = (props) => (
<View>
      <Image source={require('../assets/images/row6.jpg')} style={{height: 130, width: 130, borderColor:"black"}}></Image>
  </View>
);

export const Row7 = (props) => (
<View>
      <Image source={require('../assets/images/row7.jpg')} style={{height: 130, width: 130, borderColor: "black"}}></Image>
  </View>
);

export const Row8 = (props) => (
    <View>
          <Image source={require('../assets/images/row8.jpg')} style={{height: 130, width: 130, borderColor: "black"}}></Image>
      </View>
    );

    export const Row9 = (props) => (
        <View>
              <Image source={require('../assets/images/row9.jpg')} style={{height: 130, width: 130, borderColor: "black"}}></Image>
          </View>
        );
