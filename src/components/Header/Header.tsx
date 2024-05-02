import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.lefContainer}> 
                <Text style= {styles.tittle}>Explore</Text>
            </View>
            <View style = {styles.rightContainer}>
                <Image source={require('/Proyectos/ReactNativeCurso/ProyectoNasa/assets/nasa_logo.png')} style={styles.image} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop:16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lefContainer: {
        flex : 1,
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex : 1,
        alignItems: 'flex-end',
    },
    tittle: {
        fontSize: 20,
        color: '#fff',
    },
    image: {
        width: 60,
        height: 60,
    },
});

export default Header;