import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

export var data;
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    data = setState;
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        addMessageToState(botMessage)
    };
    const addMessageToState = (message) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { handleHello, },
                });
            })}
        </div>
    );
};

export default ActionProvider;