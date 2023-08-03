import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { data } from "../ActionProvider";
const addMessageToState = (message, setState) => {
    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
    }));
}
export const userClick = () => async (dispatch) => {
    try {
        const message = createClientMessage("Got It");
        addMessageToState(message, data);
        const new_msg = createChatBotMessage(`Enter your name `, {
            widget: "inp_name"
        })
        addMessageToState(new_msg, data)
    } catch (err) {
        console.log(err);
    }
}
export const userName = (name) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_NAME', name: name })
        const message = createClientMessage(`${name}`);
        addMessageToState(message, data);
        const new_msg = createChatBotMessage(`Enter your age`, {
            widget: "inp_age",
        })
        addMessageToState(new_msg, data)
    } catch (error) {
        console.log(error);
    }
}
export const userAge = (age) => async (dispatch) => {
    dispatch({ type: 'USER_AGE', age: age })
    try {
        const message = createClientMessage(`${age}`);
        addMessageToState(message, data);
        const new_msg = createChatBotMessage(`Thank you. In 5 seconds, bot will exit`)
        addMessageToState(new_msg, data);
        let p, number = 5;
        function updateNumber() {
            const interval = setInterval(() => {
                if (number > 0) {
                    number--;
                    p[3].innerHTML = `<span>Thank you. In ${number} seconds, bot will exit</span><div class="react-chatbot-kit-chat-bot-message-arrow"></div>`
                } else {
                    clearInterval(interval);
                    dispatch(userPage(2));
                }
            }, 1000);
        }
        setTimeout(() => {
            p = document.getElementsByClassName('react-chatbot-kit-chat-bot-message');
            updateNumber();
        }, 1000)
    } catch (error) {
        console.log(error);
    }
}
export const userPage = (pageNo) => async (dispatch) => {
    dispatch({ type: 'USER_PAGE', pageNo: pageNo })
}
