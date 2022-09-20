import React , {useState} from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
} from 'react-native';


import COLORS from '../restaurantDetail/colors';
import Ionicons from "react-native-vector-icons/Ionicons";
const {width} = Dimensions.get('screen');
import houses from '../home/Chefs';

const ChefHome = ({ navigation }) => {
    const optionsList = [
        {title: 'Buy a MealPlan', img: require('../../assets/images/row1.jpg')},
        {title: 'Order a Cheffie', img: require('../../assets/images/badchef.jpg')},
    ];


const categoryList = ['Popular', 'Recommended', 'Nearest'];

const Naira = ("\u20A6");

const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    return (
        <View style={style.categoryListContainer}>
            {categoryList.map((category, index) =>(
                <Pressable
                key={index}
                onPress={() => setSelectedCategoryIndex(index)}>
                    <Text
                    style={[
                        style.categoryListText,
                        index == selectedCategoryIndex && style.activeCategoryListText,
                    ]}>
                        {category}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

const ListOptions =() => {
    return (
        <View style ={style.optionListsContainer}>
            {optionsList.map((option, index) => (
                <View style={style.optionsCard} key={index}>
                    {/* Chefs Image */}
                    <Image source={option.img} style={style.optionsCardImage} />
                    {/* Option title */}
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: "bold"}}>
                        {option.title}
                    </Text>
                    </View>
            ))}
        </View>
    );
};

const Card = ({house}) => {
    return (
        <Pressable
        activeOpacity = {0.8}
        onPress={() => navigation.navigate('DetailsScreen', house)}>
            <View style={style.card}>
                {/* Chefs image */}
                <Image source={house.image} style={style.cardImage} />
                <View style={{marginTop: 10}}>
                    {/* Title and price container */}
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}>
                    <Text style={{fontSize:16, fontWeight: 'bold'}}>
                        {house.title}
                    </Text>
                    <Text style={{fontWeight:'bold', color: COLORS.blue, fontSize:16}}>
                        {Naira}6,000
                    </Text>

            </View>
            {/* Location text */}
            <Text style={{color: COLORS.grey, fontSize: 14, 
            marginTop:5}}>
                {house.location}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={style.facility}>
                    <Ionicons name="ios-pizza-outline"  size={18} />
                    <Text style={style.facilityText}>2</Text>
                </View>
                <View style={style.facility}>
                    <Ionicons name="ios-analytics" size={18} />
                    <Text style={style.facilityText}>100m</Text>
                </View>
            </View>
            <View style={style.facility}>
                    <Ionicons name="ios-beaker" size={18} />
                    <Text style={style.facilityText}>2</Text>
                </View>
            </View>
            </View>
        </Pressable>
    );
};

return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
        {/* Customise status bar */}
        <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        />
        {/* Header container */}
        <View style={style.header}>
            <View>
                <Text style={{color: COLORS.grey}}>Location</Text>
                <Text style={{color: COLORS.dark, fontSize: 20,
                fontWeight: 'bold'}}>
                    Abuja, LifeCamp
                </Text>
            </View>
            <Image
            style={style.profileImage}
            source={require('../../assets/images/badchef.jpg')}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* input and sort button container */}
            <View
            style={{ flexDirection: 'row', 
        justifyContent: 'space-between',
    paddingHorizontal: 20}}>
        <View style ={style.searchInputContainer}>
            <Ionicons name ="ios-search"  color={COLORS.grey} size={25} />
            <TextInput placeholder="Seach Chef, city, location" />
        </View>
        <View style={style.sortBtn}>
            <Ionicons name="md-clipboard" color={COLORS.white} size={25} />
            
        </View>
    </View>
    {/* Render list options */}
    <ListOptions />
    {/* Render categories */}
    <ListCategories />

    {/* Render Card */}
    <FlatList
    snapToInterval={width -20}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingLeft:20, paddingVertical: 20}}
    horizontal
    data={houses}
    renderItem={({item}) => <Card house={item} />}
    />
        </ScrollView>
    </SafeAreaView>
);
                };




                const style = StyleSheet.create({
                    header: {
                      paddingVertical: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                    },
                    profileImage: {
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                    },
                    searchInputContainer: {
                      height: 50,
                      backgroundColor: COLORS.light,
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 20,
                      borderRadius: 12,
                    },
                    sortBtn: {
                      backgroundColor: COLORS.dark,
                      height: 50,
                      width: 50,
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 10,
                    },
                    optionsCard: {
                      height: 210,
                      width: width / 2 - 30,
                      elevation: 15,
                      alignItems: 'center',
                      backgroundColor: COLORS.white,
                      borderRadius: 20,
                      paddingTop: 10,
                      paddingHorizontal: 10,
                    },
                    optionsCardImage: {
                      height: 140,
                      borderRadius: 10,
                      width: '100%',
                    },
                    optionListsContainer: {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 20,
                      paddingHorizontal: 20,
                    },
                    categoryListText: {
                      fontSize: 16,
                      fontWeight: 'bold',
                      paddingBottom: 5,
                      color: COLORS.grey,
                    },
                    activeCategoryListText: {
                      color: COLORS.dark,
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                    },
                    categoryListContainer: {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 40,
                      paddingHorizontal: 40,
                    },
                    card: {
                      height: 250,
                      backgroundColor: COLORS.white,
                      elevation: 10,
                      width: width - 40,
                      marginRight: 20,
                      padding: 15,
                      borderRadius: 20,
                    },
                    cardImage: {
                      width: '100%',
                      height: 120,
                      borderRadius: 15,
                    },
                    facility: {flexDirection: 'row', marginRight: 15},
                    facilityText: {marginLeft: 5, color: COLORS.grey},
                  });

export default ChefHome;
                