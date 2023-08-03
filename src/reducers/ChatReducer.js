const ChatReducer = (state = { userName: "", userAge: 0, userPage: 0 }, action) => {
    switch (action.type) {
        case 'INITIATE':
            return { userName: "", userAge: 0, userPage: 0 }
        case 'USER_NAME':
            return { ...state, userName: action.name }
        case 'USER_AGE':
            return { ...state, userAge: action.age }
        case 'USER_PAGE':
            return { ...state, userPage: action.pageNo }
        default:
            return state;
    }
}
export default ChatReducer