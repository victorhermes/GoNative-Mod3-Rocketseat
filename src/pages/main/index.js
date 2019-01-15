import React, { Component } from "react";
import styles from "./styles";
import { View, Text } from "react-native";

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
}
