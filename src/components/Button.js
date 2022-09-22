import React from "react";
import {TouchableOpacity, StyleSheet, Text } from "react-native";

export const Button = ({title, onPress=()=>{}}) => {

    return(
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button:{
        height: 55,
        width: "100%",
        backgroundColor: '#000',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        marginVertical: 20,
        borderRadius: 20
    },
    titleButton: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 18
    }
});