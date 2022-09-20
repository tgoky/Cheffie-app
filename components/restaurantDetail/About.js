import React from "react";
import { View, Text, Image } from 'react-native';



const image = "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

const title = 'Chef Niniola Kitchen' ;
const description = "African Dishes • 🎫 • 4 ⭐ (South-Eastern Nigeria Meal)";

export default function About(props ) {

    const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  //const description = `${formattedCategories} ${
    //price ? " • " + price : ""
 // } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    );
} 


const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
     <Text style={{
         fontSize: 29,
         fontWeight: "600",
         marginTop: 10,
         marginHorizontal: 15,
     }}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
  <Text style= {{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
  }}
>{props.description}
</Text>

);


