import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, Button} from "react-native";
import {PostImage} from "../../types";

 const TodaysImage: FC<PostImage> = ({date, title, url}) => {
    return(
        <View style={style.container}>
            <Image source={{uri: url}} style={style.image}/>
            <Text style={style.title}>{title}</Text>
            <Text style={style.date}>{date}</Text>
            <View style={style.buttonContainer}>
              <Button title='View' />
            </View>
        </View>
    )
 };

 const style = StyleSheet.create({
    container:{
        backgroundColor: "#2c449d",
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },
    image:{
        width: "100%",
        height: 190,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 32,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginVertical: 12,
        fontWeight: "bold",
    },
    date:{
        color: "#fff",
        fontSize: 16,
    },
    buttonContainer:{
        alignItems: "flex-end",
    }
 });
 export default TodaysImage;