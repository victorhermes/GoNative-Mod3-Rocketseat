import React, { Component } from "react";
import styles from "./styles";
import { View, Text } from "react-native";

import Header from "~/Components/Header";

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text>Welcome</Text>
            </View>
        );
    }
}
