import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
const { height, width } = Dimensions.get('window');
const data = [
    {
        "id": 12,
        "image_uri": "https://www.toptrendsguide.com/wp-content/uploads/2020/04/Best-Online-Clothing-Stores-For-Men.jpg",
        "link": null,
        "title": "Костюми",
        "filter": "Чоловікам"
    },
    {
        "id": 13,
        "image_uri": "https://image.freepik.com/free-vector/man-clothes-vector_23-2147489229.jpg",
        "link": null,
        "title": "Комплекти",
        "filter": "Чоловікам"
    },
    {
        "id": 14,
        "image_uri": "https://cdn.shopify.com/s/files/1/0932/9384/files/everyday-shirts-slider_97640cac-06df-4d3c-b74c-2717a688ec8a_1400x.jpg?v=1592582348",
        "link": null,
        "title": "Сорочки",
        "filter": "Чоловікам"
    },
    {
        "id": 15,
        "image_uri": "https://img.freepik.com/free-psd/new-style-sale-promotion-banner-template_85212-146.jpg?size=626&ext=jpg",
        "link": null,
        "title": "Новинки",
        "filter": "Жінкам"
    },
    {
        "id": 16,
        "image_uri": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18959373.jpg",
        "link": null,
        "title": "Парфуми",
        "filter": "Жінкам"
    },
    {
        "id": 17,
        "image_uri": "https://cdn2.f-cdn.com/contestentries/86500/11105422/53b944c844f05_thumb900.jpg",
        "link": null,
        "title": "Сукні",
        "filter": "Жінкам"
    },
    {
        "id": 20,
        "image_uri": "http://dslv9ilpbe7p1.cloudfront.net/g7BaARzma1wMy09HmcmmEQ_store_banner_image.jpeg",
        "link": null,
        "title": "Новинки",
        "filter": "Дітям"
    },
    {
        "id": 19,
        "image_uri": "https://cdn.wallpapersafari.com/94/80/TZ71K4.jpg",
        "link": null,
        "title": "Комплекти",
        "filter": "Дітям"
    },
    {
        "id": 18,
        "image_uri": "https://i.pinimg.com/originals/fa/f9/a6/faf9a6b30bd35206ba55b4aa57631d78.jpg",
        "link": null,
        "title": "скоро...",
        "filter": "Дітям"
    }
];
const Collections = ({ filter, navigation }) => {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            {
                data.map(element => {
                    if (filter === element.filter) {
                        return (
                            <TouchableOpacity
                                key={element.id.toString()}
                                activeOpacity={0.8}
                            >
                                <Image
                                    source={{ uri: element.image_uri }}
                                    style={styles.image}
                                    resizeMode={'cover'}
                                />
                                <View style={styles.backOverflow}>
                                    <Text style={styles.title}>{element.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                })
            }
        </View >
    );
}
const styles = StyleSheet.create({
    image: {
        width: width - 48,
        marginLeft: 24,
        height: 118,
        borderRadius: 4,
        marginBottom: 20,
    },
    backOverflow: {
        position: 'absolute',
        left: 24,
        paddingLeft: 24,
        top: 29,
        width: width - 48,
        height: 60,
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212121',
    }
});
export default Collections;