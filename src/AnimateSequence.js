import React, {Component} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

export default class AnimateSequence extends Component {
    constructor() {
        super();
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
    }

    render() {

        const animatedStyle = {
            transform: [{
                translateY: this.animatedValue1
            }, {
                scale: this.animatedValue2
            }]
        };
        return (
            <Animated.View style={[styles.btnStyle, animatedStyle]}>
                {/*<Text style={styles.text}>Click me</Text>*/}
            </Animated.View>
        );
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.animatedValue1, {
                toValue: 150,
                duration: 1000
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 3,
            }),
            Animated.timing(this.animatedValue1, {
                toValue: 0,
                duration: 1000
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 1
            })
        ]).start();
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