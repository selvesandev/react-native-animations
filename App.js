/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TimingEasing from "./src/TimingEasing";
import SpringAnimate from "./src/SpringAnimate";
import DragableAnimate from "./src/DragableAnimate";
import InterpolateValue from "./src/InterpolateValue";
import SpinnerAnimation from "./src/SpinnerAnimation";
import AnimateSequence from "./src/AnimateSequence";
import AnimateStagger from "./src/AnimateStagger";
import AnimateParallel from "./src/AnimateParallel";
import FlipCardAnimation from "./src/FlipCardAnimation";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/*<TimingEasing/>*/}
                {/*<SpringAnimate/>*/}
                {/*<DragableAnimate/>*/}
                {/*<InterpolateValue/>*/}
                {/*<SpinnerAnimation/>*/}
                {/*<AnimateSequence/>*/}
                {/*<AnimateStagger/>*/}
                {/*<AnimateParallel/>*/}
                <FlipCardAnimation/>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});