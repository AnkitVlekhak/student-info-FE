import React, { useState } from 'react'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { userPage } from '../../actions/ChatAction';
import Chatbot from 'react-chatbot-kit';
import config, { fire } from '../../config';
import MessageParser from '../../MessageParser';
import ActionProvider from '../../ActionProvider';
import Page3 from '../Page3/Page3';
const HomePage = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.ChatReducer.userPage);
    const handleClick = () => {
        dispatch(userPage(1));
        fire();
    }
    return (
        <div className='home'>
            {
                page == 0 ?
                    <div className='chatbot' style={{ flexDirection: "column", justifyContent: "center", color: 'white' }}>
                        <p>Enter into Student Info System</p>
                        <button onClick={handleClick} value={1}>Enroll Now!</button>
                    </div> : ""}
            {page == 1 ? <>
                <div className='chatbot'>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                </div>
            </> : ""

            }
            {
                page == 2 ? <Page3 />
                    : ""
            }
        </div>
    )
}

export default HomePage;