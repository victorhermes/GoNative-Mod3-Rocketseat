import React, { Component } from "react";
import styles from "./styles";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView
} from "react-native";

const Main = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Gitmark</Text>
            <Text style={styles.description}>
                Começe adicionando alguns repositórios aos seus favoritos
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="usuário/repositório"
                    underlineColorAndroid="transparent"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                    activeOpacity={0.6}
                >
                    <Text style={styles.buttonText}>
                        Adicionar aos favoritos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.footerLink}>Meus repositórios (3)</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

Main.navigationOptions = {
    header: null
};

export default Main;
