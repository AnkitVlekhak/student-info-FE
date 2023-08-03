import React, { useState } from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Options, { h } from './components/Options/Options.jsx';
import Age from './components/Age/Age.jsx';
import Name from './components/Name/Name.jsx';
export const fire = () => {
    setTimeout(() => {
        document.getElementsByClassName('react-chatbot-kit-chat-bot-message')[0].innerHTML = '<span>Hello, Welcome to student info system!</span><div class="react-chatbot-kit-chat-bot-message-arrow"></div>';
        h();
    }, 2900)
}
const config = {
    initialMessages: [createChatBotMessage(`...`, {
        widget: 'option'
    })],
    widgets: [
        {
            widgetName: 'option',
            widgetFunc: (props) => <Options />,
        },
        {
            widgetName: 'inp_age',
            widgetFunc: (props) => <Age />,
        },
        {
            widgetName: 'inp_name',
            widgetFunc: (props) => <Name />,
        },
    ],
};

export default config;