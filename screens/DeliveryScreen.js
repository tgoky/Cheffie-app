import React , { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Modal} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
//import { selectRestaurant} from "../components/home/RestaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import COLORS from '../components/restaurantDetail/colors';
import GOOGLE_API_KEY from "../components/restaurantDetail/Maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";




export const DeliveryScreen = () => {


  const navigation = useNavigation();

  // const mapView = React.useRef()
  // const restaurant = useSelector((state) => state.cartReducer.selectedItems);

   const [mapRegion, setmapRegion] = useState({
       latitude: 37.78825,
       longitude: -122.4324,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     });

     return (
      <View>
        
         <View style={{ marginTop: 15, flexDirection: "row", backgroundColor: "white", borderRadius: 50, }}>
         <>
  {/* <Modal animationType='slide'  transparent={false} 
>{checkoutModalContent()}</Modal> */}
<View style= {{
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    zIndex: 999,
}}>
  <View style={{
     flexDirection: "row",
     justifyContent: "center",
     width: "100%"
 }}>

 </View>
 </View>
 
 
 </>


          <GooglePlacesAutocomplete placeholder="Search" 
          
           //  query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
           
          // styles={{
          //   textInput: {
          //       backgroundColor: "#eee",
          //       borderRadius: 30,
          //       fontWeight: "700",
          //       marginTop: 7,
          //      margin: 40,
          //       bottom: -6
          //   },
          //   textInputContainer: {
          //       backgroundColor: "#eee",
          //       borderRadius: 50,
          //       flexDirection: "row",
          //       alignItems: "center",
          //       marginRight: 10,
          //       margin: 2
          //   },
          // }}
          
          renderLeftButton={() => (<View style={{ marginLeft: 10, bottom: -8, right: -5}}>
          <Ionicons name='fast-food-outline' size={30} />
          </View>
          )}

          renderRightButton={() => (<View style={{
           flexDirection: "row",
           marginRight: 8,
           backgroundColor: "white",
           padding: 9,
           borderRadius: 30,
           alignItems: "center", 
           bottom: -8,
          }}>
              <AntDesign name='clockcircle' size={11} style={{marginRight: 6}}/>
              <Text>10 MINS</Text></View>)}
              
          /> 
          
      </View>


      <View 
      style={{
        position: 'absolute',
        bottom: 40,
        left: 0,
        margin: 3,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View
        style={{
          width: 31,
          paddingVertical: 20,
          paddingHorizontal: 21,
          borderRadius: 2,
          backgroundColor: 'white'
        }}></View>
      </View>

      
      
          <SafeAreaView>
           
          <MapView

style={styles.map}

initialRegion={{
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
 
  
}}


/>
</SafeAreaView>
<View style={{
postion: 'absolute',
bottom: 50,
left: 0,
right: 0,
alignItems: 'center',
justifyContent: 'center'
}}>
<View 
style={{
  width: 340,
  paddingVertical: 30,
  paddingHorizontal: 30,
  borderRadius: 20,
  backgroundColor: '#D0D3D4',
  bottom: -650,
}}>
  <View style={{
    flexDirection: 'row',
    alignItems: 'center'
  }}>
    <Image
    source={require('../assets/images/badchef.jpg')}
    style={{
      width: 50,
      height: 50,
      borderRadius: 88,
    }}/>
    <View style={{flex: 1, marginLeft: 10 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
         <Text style={{fontFamily:"Futura"}}>
          Chef Ben
        </Text> 
        <View style={{flexDirection: 'row'}}>
          {/* <Image 
          source={require('../assets/images/badchef.jpg')}
          style={{ width: 18, height: 19, tintColor:'red', 
        marginRight: 12}}/>
        <Text>3.9</Text> */}
        </View>

    </View>
    <Text style={{fontFamily:"Futura"}}>Chef Niniola Kitchen</Text>
  </View>
  </View>
  <View style={{
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  }}>
    <TouchableOpacity style={{
      height: 40,
      flex: 1,
      marginRight: 10,
      backgroundColor: '#cd853f',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    }}
 >
      <Text style={{
        fontFamily: "Futura",
        color: 'white'
      }}>
        Call
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height: 40,
      flex: 1,
      backgroundColor: '#cd853f',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    }}>
      <Text style={{
        fontFamily: "Futura",
        color: 'white'
      }}
     >
        Cancel
      </Text>
    </TouchableOpacity>
    
  </View>
  </View>


</View>
      </View>
      

  );

};

export default DeliveryScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 810,
  },
});



