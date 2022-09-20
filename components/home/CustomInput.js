import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';



const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor="#cd853f"
            textAlign='center'
            
            style={styles.input} 
            secureTextEntry={secureTextEntry}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
        width: '100%',
        height: 55,
        justifyContent: 'center',
        
        borderColor: '#e8e8e8',
        borderWidth: 14,
        borderRadius: 5,
        
        paddingHorizontal: 90,
        marginVertical: 5,
    },
    input: {
       textAlign: 'center'
        
    },
});


export default CustomInput;