import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
const { height, width } = Dimensions.get('window');
import TitledHeader from './components/TitledHeader';
const goods = [
    {
        "id": 12,
        "image_uri": "https://www.toptrendsguide.com/wp-content/uploads/2020/04/Best-Online-Clothing-Stores-For-Men.jpg",
        "title": "Річ №22",
        "price": "₴ 1590",
        "sale": "-10%"
    },
    {
        "id": 13,
        "image_uri": "https://www.charmelon.com/wp-content/uploads/2020/06/black-tshirt-back-side-teeguruji.jpg",
        "title": "Чорна футболка та довга назва",
        "price": "₴ 150",
        "sale": false
    },
    {
        "id": 14,
        "image_uri": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zip-up-hoodies-1612369144.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
        "title": "Костюми",
        "price": "₴ 250",
        "sale": "-15%"
    },
    {
        "id": 15,
        "image_uri": "https://cdn.shopify.com/s/files/1/1722/0531/products/TruthHoodie-BlackBack_1024x1024.jpg?v=1571439084",
        "title": "Довга назва для чорного худі",
        "price": "₴ 2299",
        "sale": "-12%"
    },
    {
        "id": 16,
        "image_uri": "https://assets.teenvogue.com/photos/5fda0927416c1a52dc98d020/master/pass/Style_Hoodies_Dec14_PROMO.jpg",
        "title": "Костюми",
        "price": "₴ 360",
        "sale": false
    },
    {
        "id": 17,
        "image_uri": "https://media.glamour.com/photos/5e9601cedda1fb000807814f/master/pass/river%20(8).jpg",
        "title": "Костюми",
        "price": "₴ 790",
        "sale": false
    },
    {
        "id": 18,
        "image_uri": "https://src1.ilogo.in/images/products/4291/custom-zipper-hoodies.jpg",
        "title": "Костюми",
        "price": "₴ 1240",
        "sale": false
    }
];

const Goods = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <TitledHeader title={route.params.headerTitle} navigation={navigation} />
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ width: width, flexDirection: 'row-reverse', justifyContent: 'center', }}
            >
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {
                        goods.map((element, index) => {
                            if (index % 2 == 0) {
                                return;
                            } else {
                                return (
                                    <TouchableOpacity
                                        key={element.id.toString()}
                                        activeOpacity={0.8}
                                        style={{ marginRight: 20 }}
                                    >
                                        <Image
                                            source={{ uri: element.image_uri }}
                                            style={styles.image}
                                            resizeMode={'cover'}
                                        />
                                        <View>
                                            <Text style={styles.title}>{element.title}</Text>
                                            <Text style={styles.price}>{element.price}</Text>
                                        </View>
                                        {
                                            element.sale !== false &&
                                            <View style={styles.sale}>
                                                <Text style={styles.saleText}>{element.sale}</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                )
                            }
                        })
                    }
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {
                        goods.map((element, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <TouchableOpacity
                                        key={element.id.toString()}
                                        activeOpacity={0.8}
                                        style={{ marginLeft: 20 }}
                                    >
                                        <Image
                                            source={{ uri: element.image_uri }}
                                            style={styles.image}
                                            resizeMode={'cover'}
                                        />
                                        <View>
                                            <Text style={styles.title}>{element.title}</Text>
                                            <Text style={styles.price}>{element.price}</Text>
                                        </View>
                                        {
                                            element.sale !== false &&
                                            <View style={styles.sale}>
                                                <Text style={styles.saleText}>{element.sale}</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                )
                            } else {
                                return;
                            }
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: (width - 76) / 2,
        height: (width - 76) / 2,
        borderRadius: 4,
    },
    title: {
        width: (width - 76) / 2,
        marginTop: 12,
        fontSize: 14,
        color: '#212121',
        lineHeight: 20
    },
    price: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 17
    },
    sale: {
        position: 'absolute',
        width: 44,
        height: 24,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        right: 16,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4
    },
    saleText: {
        color: '#fff'
    }
});
export default Goods;