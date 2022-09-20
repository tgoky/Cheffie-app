import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import OrderItem from './OrderItem';
//import firebase from "../../firebase";
import LottieView from "lottie-react-native";





export default function ViewCart( props) {
    const navigation = useNavigation()
     const [modalVisible, setModalVisible ] = useState(false);
   


    const {items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
    const total = items.map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: "USD",
    });


const addOrderToFireBase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
   
};

const finalizeOrder = () => {
    navigation.navigate("OrderCompleted");

};

   const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
            },

            restaurantName: {
                textAlign: "center",
                fontWeight: "600",
                fontSize: 18,
                marginBottom: 10,
            },

            subtotalContainer: {
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15,
            },

            subtotalText: {
               textAlign: "left",
                fontWeight: "600",
                fontSize: 15,
                marginBottom: 10,
            },
    });

  const checkoutModalContent = () => {
     return (
         <>
         <View style={styles.modalContainer}>
             <View style={styles.modalCheckoutContainer}>
                 <Text style={styles.restaurantName}>{restaurantName}</Text>      
                   <Text style={{ fontStyle: "italic", fontFamily: "Palatino", fontSize: 45, alignItems: "center", }}>Thanks for allowing Molly be your cuisinier !... your total bill is </Text>
                      <Text style={{ fontSize: 83, marginTop: 53, marginLeft: 60}}>{totalUSD}</Text>
               
               <View
                   style={{ flexDirection: "row", justifyContent: "center"}}></View>
            <TouchableOpacity
            style={{
                marginTop: 55,
                marginLeft: 34,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width:300,
                position: "relative",
            }}
            onPress={() => {
                finalizeOrder();
                setModalVisible(false);
              }}
            >
                 
        
                <Text style= {{ color: "white", fontSize: 20, marginRight: 40 }}>Checkout</Text>
                <Text style={{position: "absolute", right: 20, color: "white", fontSize: 15, top: 17}}>{total ? totalUSD : ""}</Text>
            </TouchableOpacity>
             </View>

         </View>
         </>
     );
            };


return (
    <>
    <Modal animationType='slide' visible={modalVisible} transparent={true} 
    onRequestClose={() => setModalVisible(false)}>{checkoutModalContent()}</Modal>
   {total ? (
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
       <TouchableOpacity style={{ 
           marginTop: 20,
           backgroundColor: 'black',
           alignItems: "center",
           padding: 8,
           borderRadius: 30,
           width: 300,
           position: "relative",
       }}
       onPress={() => setModalVisible(true)}
       >
            <Text style={{color: "white", fontSize: 20, marginRight: 30, marginLeft: 30 ,padding: 4,}}>View Cart</Text>
      
       </TouchableOpacity>  
   </View>
   </View>
    ) : (
        <></>
    )}
   </>
);

}