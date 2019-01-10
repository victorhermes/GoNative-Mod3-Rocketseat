import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/action/todos";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

const TodoList = ({ todos, addTodo }) => {
    return (
        <View style={styles.container}>
            {todos.map(todo => (
                <Text key={todo}>{todo}</Text>
            ))}

            <TouchableOpacity
                onPress={() => {
                    addTodo("Novo item");
                }}
            >
                <Text>Adicionar todo</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
