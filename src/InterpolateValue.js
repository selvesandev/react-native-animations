import React, {Component} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

export default class InterpolateValue extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }


    render() {
        const interpolateColor = this.animatedValue.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgb(0,0,0)', 'rgb(51,250,170)']
        });


        const animatedStyle = {
            backgroundColor: interpolateColor,
            transform: [{
                translateY: this.animatedValue
            }]
        };
        return (
            <Animated.View style={[styles.btnStyle, animatedStyle]}>
                {/*<Text style={styles.text}>Click me</Text>*/}
            </Animated.View>
        );
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1500
        }).start();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        width: 150,
        height: 70,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
});