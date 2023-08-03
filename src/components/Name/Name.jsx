import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userName } from '../../actions/ChatAction';

const Name = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        document.getElementById('inp_name').style.display = "none";
        e.preventDefault();
        dispatch(userName(name))
    }
    return (
        <div id='inp_name' >
            <form action="" onSubmit={handleSubmit}>
                <label for='name'>Name : </label>
                <input type="text" name="userName" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </form>
        </div>
    )
}

export default Name