import React, {FC} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage, PostImage as PostImageTypes } from "../../types";
import PostIamage from "../PostIamage";

const LastFiveDaysImages: FC<{ postImages?: PostImageTypes[]}> = ({ 
    postImages, 
}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Last 5 days</Text>
                <ScrollView style={styles.content}>
                    {postImages?.map(postImage => (
                        <PostIamage key={`post-image-${postImage.title}`} {...postImage}/>
                    ))}
                </ScrollView>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 8,
    },
    title:{
        color: "#fff",
        fontSize: 16,
        marginBottom : 18,
    },
    content:{
        paddingHorizontal: 24,
    }
});

export default LastFiveDaysImages;