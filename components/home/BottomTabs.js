import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/Ionicons";



export default function BottomTabs() {
    return (
          <View style={{ flexDirection: "row", margin: 10, marginHorizontal: 30, justifyContent: "space-between",}}>
              <Icon icon="home" text="Home" />
              <Icon icon="ios-pizza" text="MealPlan" />
              <Icon icon="ios-beer" text="Explore " />
              <Icon icon="receipt" text="CookBooks " />
              <Icon icon="ios-person" text="Profile " />
          </View>
    );
}


const Icon = (props) => (
  <TouchableOpacity>
  <View>
    <FontAwesome5 name={props.icon} size={25} 
    style={{ marginBottom: 3, 
        alignSelf: "center",
      
        
        
     }}/>
     <Text>{props.text}</Text>
     </View>
     </TouchableOpacity>
);

 