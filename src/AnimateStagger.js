import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Animated, Text} from 'react-native';

const {height, width} = Dimensions.get('window');
export default class AnimateStagger extends Component {
    constructor() {
        super();
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }

    render() {
        const animatedStyle1 = {
            height: this.animatedValue1
        };

        const animatedStyle2 = {
            height: this.animatedValue2
        };

        const animatedStyle3 = {
            height: this.animatedValue3
        };
        console.log(height);

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle1]}>
                    {/*<Text style={styles.text}>Click me</Text>*/}
                </Animated.View>

                <Animated.View style={[styles.box, animatedStyle2]}>
                    {/*<Text style={styles.text}>Click me</Text>*/}
                </Animated.View>

                <Animated.View style={[styles.box, animatedStyle3]}>
                    {/*<Text style={styles.text}>Click me</Text>*/}
                </Animated.View>
            </View>
        );
    }

    componentDidMount() {
        Animated.stagger(1000, [
            Animated.timing(this.animatedValue1, {
                toValue: 300,
                duration: 1500
            }),

            Animated.timing(this.animatedValue2, {
                toValue: 500,
                duration: 1500
            }),

            Animated.timing(this.animatedValue3, {
                toValue: 800,
                duration: 1500
            })
        ]).start()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        height: 70,
        backgroundColor: '#333',
        flex: 1,
        marginHorizontal: 5
    },
    text: {
        color: 'white'
    }
});