import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SelectCalendar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/imgcalendar/calendar2.png')} style={styles.image} />
                    <Text style={styles.text}>Janeiro</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/imgcalendar/calendar1.png')} style={styles.image} />
                    <Text style={styles.text}>Fevereiro</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/imgcalendar/ca5.png')} style={styles.image} />
                    <Text style={styles.text}>Março</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/imgcalendar/ca4.png')} style={styles.image} />
                    <Text style={styles.text}>Abril</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/imgcalendar/ca6.png')} style={styles.image} />
                    <Text style={styles.text}>Maio</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/imgcalendar/ca3.png')} style={styles.image} />
                    <Text style={styles.text}>Junho</Text>
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <Button
                    icon={<Icon name="keyboard-arrow-left" size={30} color="#9DD9E7" />}
                    title=""
                    buttonStyle={styles.button}
                    onPress={() => {

                    }}
                />

                <Button

                    icon={<Icon name="home" size={30} color="#9DD9E7" />}
                    buttonStyle={styles.button}
                    onPress={() => {

                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "15%"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginHorizontal: 10,

    },
    image: {
        width: 170,
        height: 170,
        resizeMode: 'cover',
    },
    text: {
        marginTop: 5,
        fontWeight: '500'
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#9DD9E7',
        borderWidth: 3,
        borderRadius: 50
    },
    bottomButtons: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        position: 'absolute',
        bottom: 20,

    },
});

export default SelectCalendar;
