import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Input = ({label, error, onFocus=()=>{}, iconName, ...props }) => {

    return(
        <View style={styles.formContainer}>

            <Text style={styles.inputLabel}>{label}</Text>

            <View style={[styles.imputContainer, {borderColor: error ? '#F00' : '#000'}]}>

                <Icon style={styles.icon} name={iconName}></Icon>

                <TextInput 
                style={styles.TextInput} 
                    autoCorrect={false}
                    onFocus={()=>{onFocus()}}
                    {...props}  
                />
                
            </View>
            <Text>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    formContainer:{
        marginBottom: 5,
    },
    inputLabel:{
        marginVertical: 5,
        fontSize: 15,
        color: '#000'
    },
    imputContainer: {
        height: 40,
        backgroundColor: '#ffa500',
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center"
    
    },
    TextInput: {
        color: '#FFF',
        flex: 1,
    },
    icon: {
        fontSize: 22,
        color: '#000',
        marginRight: 10
    }
});
