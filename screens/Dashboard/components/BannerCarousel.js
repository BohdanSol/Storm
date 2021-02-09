import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';
const data = [
    {
        "id": 12,
        "image_uri": "https://i.pinimg.com/originals/6d/08/6a/6d086ac5f60bd2b934e69ad4aa510eda.jpg",
        "link": null
    },
    {
        "id": 13,
        "image_uri": "https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg",
        "link": null
    },
    {
        "id": 14,
        "image_uri": "https://i.pinimg.com/originals/fa/f9/a6/faf9a6b30bd35206ba55b4aa57631d78.jpg",
        "link": null
    },
    {
        "id": 15,
        "image_uri": "https://i.pinimg.com/originals/6a/b9/65/6ab965ec0b909dedb60d96d5351419d9.png",
        "link": null
    }
];
const BannerCarousel = ({ navigation }) => {
    return (
        <Swiper
            style={styles.wrapper}
            activeDot={
                <View style={{ backgroundColor: '#212121', width: 15, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
            }
            autoplay={true}
            showsPagination={true}
            paginationStyle={{ bottom: 0 }}
        >
            {
                data.map(element => {
                    return (
                        <TouchableOpacity
                            key={element.id.toString()}
                            activeOpacity={1}
                        >
                            <Image
                                source={{ uri: element.image_uri }}
                                style={styles.image}
                                resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                    )
                })
            }
        </Swiper>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        height: 140,
    },
    image: {
        width: width - 48,
        marginLeft: 24,
        height: 118,
        borderRadius: 4
    }
});
export default BannerCarousel;