import React from 'react';
import { View, Text } from 'react-native';
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';


const foods = [
    {
        title: "Okro Soup and Eba",
        description: "Native prepared Okro soup with Snail, Beef and Vegetable leaves",
        price: "$17.00",
        priceNGN: "\u20A62,500",
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

    },
    {
        title: "Banga Soup and Fufu",
        description: "Freshly cut banga leaves and oil to give the meal a unique taste ",
        price: "$15.00",
        priceNGN: "\u20A64,500",
        image: "http://foodiesbymina.com/wp-content/uploads/2021/07/banga-soup-foodiesmina-scaled.jpg",
    },
    {
        title: "Rice with Chicken",
        description: "Amazing African Dish with a laps of chicken and tomato sauce",
        price: "$12.00",
        priceNGN: "\u20A62,500",
        image: "https://images.unsplash.com/photo-1632852576480-c10a8e19496a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        title: "Yam Chips and Plantain Chips with Sauce",
        description: "Sliced yam with fresh tomato sauce",
        price: "$13.00",
        priceNGN: "\u20A62,500",
        image: "https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eWFtJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
        title: "Spaghetti and Beef Sauce",
        description: "Spaghetti with dices of meat balls ",
        price: "$09.00",
        priceNGN: "\u20A62,000",
        image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },

];

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{ marginVertical: 20}} />
          <MenuItems restaurantName={route.params.name} foods={foods}/>
          <ViewCart navigation={navigation}  />
        </View>
    );
}