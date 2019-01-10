const initialState = [
    "Estudar GoNative",
    "Fazer café",
    "Ir ali fazer um cafézinho"
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.text];
        default:
            return state;
    }
}
