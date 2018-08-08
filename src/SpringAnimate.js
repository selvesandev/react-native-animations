import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing, TouchableWithoutFeedback, Text} from 'react-native';

export default class SpringAnimate extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(1);
    }


    render() {
        const animatedStyle = {
            transform: [{
                scale: this.animatedValue
            }]
        };
        return (
            <TouchableWithoutFeedback onPressIn={() => {
                Animated.spring(this.animatedValue, {
                    toValue: .5
                }).start();
            }} onPressOut={() => {
                Animated.spring(this.animatedValue, {
                    toValue: 1,
                    friction: 3,
                    tension: 40
                }).start();
            }}>
                <Animated.View style={[styles.btnStyle, animatedStyle]}>
                    <Text style={styles.text}>Click me</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

        );
    }

    componentDidMount() {

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