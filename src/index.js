import "./config/ReactotronConfig";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "~/store";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Text>Olá mundo do Redux</Text>
                </View>
            </Provider>
        );
    }
}
