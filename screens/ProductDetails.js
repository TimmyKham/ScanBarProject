import React, { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import Constants from 'expo-constants';


const config = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
}

const ProductDetails = ({ route }) => {

    const data = route.params.params.productData;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: config.deviceWidth * 0.03, marginBottom: config.deviceHeight * 0.01, marginTop: config.deviceHeight * 0.01 }}>
                        <Image
                            source={{ uri: data.image_small_url }}
                            style={{ width: 150, height: 150, }}
                        />
                        <View style={{ flexDirection: 'column', margin: config.deviceWidth * 0.05 }}>
                            <Text>{data.product_name}</Text>
                            <Text>{data.brands}</Text>
                            <Text>{data.quantity}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', alignItems: 'center', padding: config.deviceWidth * 0.05 }}>
                        <Text>
                            <Text>Code Barre: </Text>
                            <Text style={{ fontWeight: "bold" }}>{data.code.toUpperCase()}</Text>
                        </Text>
                        <Text>
                            <Text>Catégories: </Text>
                            <Text style={{ fontWeight: "bold" }}>{data.categories.toUpperCase()}</Text>
                        </Text>
                        <Text>
                            <Text>Nutriscore: </Text>
                            <Text style={{ fontWeight: "bold" }}>{data.nutrition_grades.toUpperCase()}</Text>
                        </Text>
                        <Text>
                            <Text>Description:</Text>
                            <Text style={{ fontWeight: "bold" }}>{data.generic_name_fr}</Text>
                        </Text>
                        <Text>
                            <Text>Ingrédients: </Text>
                            <Text style={{ fontWeight: "bold" }}>{data.ingredients_text_fr ? data.ingredients_text_fr : data.ingredients_text.toUpperCase()}</Text>
                        </Text>
                    </View>
                    <View>
                        <View style={{ backgroundColor: '#fff', alignItems: 'center', padding: config.deviceWidth * 0.05, marginTop: config.deviceHeight * 0.01 }}>
                            <Text style={{ fontWeight: "bold" }}>Repères nutritionnels pour 100 g</Text>
                            <DataTable >
                                <DataTable.Row>
                                    <DataTable.Cell>Énergie</DataTable.Cell>
                                    <DataTable.Cell numeric>{data.nutriments.energy_100g}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Matières grasses / Lipides</DataTable.Cell>
                                    <DataTable.Cell numeric>{data.nutriments.fat_100g}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Acides gras saturés</DataTable.Cell>
                                    <DataTable.Cell numeric>{data.nutriments['saturated-fat_100g']}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Sucres</DataTable.Cell>
                                    <DataTable.Cell numeric>{data.nutriments.sugars_100g}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Sel</DataTable.Cell>
                                    <DataTable.Cell numeric>{data.nutriments.sodium_100g}</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Pagination
                                    page={1}
                                    numberOfPages={3}
                                    onPageChange={page => {
                                        console.log(page);
                                    }}
                                />
                            </DataTable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }, scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }, text: {
        fontSize: 42,
    },
});
export default ProductDetails;