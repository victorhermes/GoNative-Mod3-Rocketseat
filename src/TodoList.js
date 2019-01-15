import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/action/todos";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    todoContainer: {
        flexDirection: "row"
    },
    todoDelete: {
        color: "red"
    }
});

const TodoList = ({ todos, addTodo, removeTodo }) => (
    <View style={styles.container}>
        {todos.map(todo => (
            <View key={todo.id} style={styles.todoContainer}>
                <Text>{todo.text}</Text>
                <TouchableOpacity
                    onPress={() => {
                        removeTodo(todo.id);
                    }}
                >
                    <Text style={styles.todoDelete}>Excluir</Text>
                </TouchableOpacity>
            </View>
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

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
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
