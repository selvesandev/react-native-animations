import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';

const {height, width} = Dimensions.get('window');
export default class FlipCardAnimation extends Component {
    constructor() {
        super();
        this.value = 0;
        this.animatedValue = new Animated.Value(0);
        this.animatedValue.addListener(({value}) => {
            this.value = value;
        });
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        });
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        });
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                {rotateX: this.frontInterpolate}
            ]
        };
        const backAnimatedStyle = {
            transform: [
                {rotateX: this.backInterpolate}
            ]
        };


        return (
            <View style={styles.container}>
                <View>
                    <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                        <Text style={[styles.flipText]}>
                            This text is flipping on the front.
                        </Text>
                    </Animated.View>

                    <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
                        <Text style={[styles.flipText]}>
                            This text is flipping on the back.
                        </Text>
                    </Animated.View>
                </View>
                <TouchableOpacity onPress={() => {
                    if (this.value >= 90) {
                        Animated.timing(this.animatedValue, {
                            toValue: 0,
                            duration: 800
                        }).start()
                    } else {
                        Animated.timing(this.animatedValue, {
                            toValue: 180,
                            duration: 800
                        }).start()
                    }
                }}>
                    <Text>Flip!</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        // Animated.parallel([
        //     Animated.timing(this.animatedValue1, {
        //         toValue: 300,
        //         duration: 300
        //     }),
        //
        //     Animated.spring(this.animatedValue2, {
        //         toValue: 2,
        //         duration: 1000
        //     })
        // ]).start()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flipCard: {
        height: 200,
        backgroundColor: '#999',
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        backgroundColor: '#333',
        position: 'absolute',
        top: 0
    },
    flipText: {
        color: 'white'
    }
});