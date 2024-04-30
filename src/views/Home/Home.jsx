import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';

const Home = () =>{
    const [todaysImage, setTodaysImage] = useState();
    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch(error) { 
                console.log(error);
                setTodaysImage(todaysImageResponse)
            }
        };
        loadTodaysImage().catch(null);
    }, []);
    return(
        <View style={style.container}>
            <Header />
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
});

export default Home;