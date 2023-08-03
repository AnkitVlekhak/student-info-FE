import React from 'react'
import { useSelector } from 'react-redux';

const Page3 = () => {
    var name = useSelector((state) => state.ChatReducer.userName);
    var age = useSelector((state) => state.ChatReducer.userAge);
    return (
        <div className='chatbot' style={{ flexDirection: "column", justifyContent: "center", color: 'white' }}>
            <p>Your name {name} age {age} has been added to student system. You may now exit.</p>
        </div>
    )
}

export default Page3