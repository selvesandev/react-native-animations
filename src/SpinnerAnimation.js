import React, {Component} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

export default class SpinnerAnimation extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }

    render() {
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', '360deg']
        });

        const animatedStyle = {
            transform: [{
                rotate: interpolateRotation
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
            toValue: 1,
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