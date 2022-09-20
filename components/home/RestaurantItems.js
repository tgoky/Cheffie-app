import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localRestaurants = [
    {
        name: "Chef Niniola kitchen ",
        image_url:
        "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        categories: ["Cafe", "Bar"],
        price: "&#8358;",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Sugary ChefBar",
        image_url:
        "https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2498&q=80",
        categories: ["Cafe", "Bar" ],
        price: "&#8358;",
        reviews: 1244,
        rating:  3.7,
    },
    {
        name: "Metasino Bar",
        image_url:
        "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        categories: ["Meta", "Bar" ],
        price: "&#8358;",
        reviews: 12423,
        rating:  3.7,
    },

];



export default function RestaurantItems({navigation, ...props}) {
    return (
      <>
          {localRestaurants.map((restaurant, index) => (
                <TouchableOpacity
                key={index} 
                 activeOpacity={1} style={{ marginBottom: 30}} 
                onPress={() => navigation.navigate("RestaurantDetail", {
                   name: restaurant.name,
                   image: restaurant.image_url,
                   price: restaurant.reviews_count,
                   rating: restaurant.rating,
                   categories: restaurant.categories,
                })}>
        <View style={{ marginTop: 10, padding:15, backgroundColor: "white", }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} /> 
        </View>
        </TouchableOpacity>
          ))}
    </>
    );
}


const RestaurantImage = (props) => (
    <>
    <Image source={{
            uri: props.image 
    }}
    style={{width: "100", height: 180 }}
    />
    <TouchableOpacity style ={{ position: "absolute", right: 20, top:20, }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
    </TouchableOpacity>
    </>

);


const RestaurantInfo = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10,}}>
        <View>
     <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
     <Text style={{fontSize: 13, color: "gray"}}>30 - 45 mins</Text>
     </View>
     <View style={{
         backgroundColor: "#eee", height: 30, 
         width: 30, alignItems: "center", 
         borderRadius: 15, justifyContent: "center",
     }}> 
     <Text>{props.rating}</Text>
     </View>
     </View>
);