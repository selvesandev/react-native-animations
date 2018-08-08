import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Animated, Easing} from 'react-native';

export default class TimingEasing extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(300);
    }

    render() {
        const animatedStyle = {height: this.animatedValue};
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        );
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1000,
            easing: Easing.bounce
        }).start();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    box: {
        backgroundColor: '#333',
        height: 100,
        width: 100
    }
});