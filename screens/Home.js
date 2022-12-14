import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../components/home/Categories';
import { Divider } from "react-native-elements";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
    localRestaurants,
}  from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import BottomTabs from "../components/home/BottomTabs";



//const YELP_API_KEY ="bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";


 
export default function Home({navigation}) {
    const [ restaurantData, setRestaurantData ] = useState(localRestaurants);

    //const getRestaurantsFromYelp = () => {
    //    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Texas";
    


  //  const apiOptions = {
     //   headers: {
       //     Authorization: `Bearer ${YELP_API_KEY}`,
    //    },
  //  };
        //return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setRestaurantData(json.businesses));
    //}; 

    //useEffect(() => {
      //  getRestaurantsFromYelp();
    //}, []);

     return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
            <View style={{ backgroundColor: "white", padding: 15}}>
            <HeaderTabs />
           <SearchBar />
            </View>
            <ScrollView showVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData={restaurantData} 
            navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />     
        </SafeAreaView>
    );
}


