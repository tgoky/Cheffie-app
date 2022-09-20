import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider} from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import ChefProfile from "./screens/ChefProfile";
import OnBoarding from "./screens/OnBoarding";
import ChefHome from "./components/home/ChefHome";
import DeliveryScreen from "./screens/DeliveryScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ConfirmEmailScreen from "./screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import NewPasswordScreen from "./screens/NewPasswordScreen";




import SkipScreen from "./screens/SkipScreen";

const store = configureStore();


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions ={
        headerShown: false,
    };


    // const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    // useEffect(() => {
    //     AsyncStorage.getItem('alreadyLaunched').then(value => {
    //         if(value == null ) {
    //             AsyncStorage.setItem('alreadyLaunched', 'true');
    //             setIsFirstLaunch(true);

    //         } else {
    //             setIsFirstLaunch(false);
    //         }
    //     });
    // }, []);

    

    return (
        <ReduxProvider store={store}>
     <NavigationContainer>
    <Stack.Navigator initialRouteName="OnBoarding" screenOptions={screenOptions}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
    <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
    <Stack.Screen name='ChefProfile' component={ChefProfile} />
    <Stack.Screen name='OnBoarding' component={OnBoarding} />
    <Stack.Screen name='ChefHome' component={ChefHome} />
    <Stack.Screen name='DeliveryScreen' component={DeliveryScreen} />
    <Stack.Screen name='SignInScreen' component={SignInScreen} />
    <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    <Stack.Screen name='ConfirmEmailScreen' component={ConfirmEmailScreen} />
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
    <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
    <Stack.Screen name='SkipScreen' component={SkipScreen} />
   
    
   

    </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
    );
       
}