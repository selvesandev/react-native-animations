import React, {Component} from 'react';
import {View, StyleSheet, Animated, TouchableWithoutFeedback, Text, PanResponder} from 'react-native';

export default class DragableAnimate extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.ValueXY();
        this._value = {x: 0, y: 0};
        this.animatedValue.addListener((v) => {
            return this._value = v;
        });
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y
                });
                this.animatedValue.setValue({x: 0, y: 0})
            },
            onPanResponderMove: Animated.event([
                null, {dx: this.animatedValue.x, dy: this.animatedValue.y}
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                this.animatedValue.flattenOffset();
                Animated.decay(this.animatedValue, {
                    deceleration: 0.997,
                    velocity: {
                        x: gestureState.vx,
                        y: gestureState.vy
                    }
                }).start();
            },
        });
    }


    render() {
        const animatedStyle = {
            transform: this.animatedValue.getTranslateTransform()
        };
        return (

            <Animated.View style={[styles.btnStyle, animatedStyle]} {...this.panResponder.panHandlers}>
                <Text style={styles.text}>Drag me</Text>
            </Animated.View>

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