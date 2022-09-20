import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: "Request Chef",
    },
    {
        image: require('../../assets/images/bread.png'),
        text: "Chef Pastries",
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: "Chef Soda",
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: "Fast Chef",
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: "Chef Brew",
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: "Chef Desserts",
    },
    {
        image: require('../../assets/images/deals.png'),
        text: "Hire a Chef",
    },
];




export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
        <ScrollView horizontal showHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
          <Image source={item.image} style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
          }}/>
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
            ))}
        </ScrollView>
        </View>
    );
}