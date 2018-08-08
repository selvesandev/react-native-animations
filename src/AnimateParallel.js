import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Animated} from 'react-native';

const {height, width} = Dimensions.get('window');
export default class AnimateParallel extends Component {
    constructor() {
        super();
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
    }

    render() {
        const animatedStyle1 = {
            transform: [{
                translateY: this.animatedValue1
            }, {
                scale: this.animatedValue2
            }]
        };

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box,animatedStyle1]}>
                    {/*<Text style={styles.text}>Click me</Text>*/}
                </Animated.View>
            </View>
        );
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.animatedValue1, {
                toValue: 300,
                duration: 300
            }),

            Animated.spring(this.animatedValue2, {
                toValue: 2,
                duration:1000
            })
        ]).start()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    box: {
        height: 70,
        backgroundColor: '#333',
        width:100
        // flex: 1,
        // marginHorizontal: 5
    },
    text: {
        color: 'white'
    }
});